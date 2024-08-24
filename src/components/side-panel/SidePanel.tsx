import { createPortal } from "react-dom";
import styles from "./SidePanel.module.scss";
import { useMemo, useState } from "react";
import { IconButton } from "@/style-components";
import { SidePanelService } from "@/services/event-service";
import { Typography } from "../utils";
import { Button } from "../ui/Button";
import { SidePanelBody } from "./SidePanelBody";
import { NewWordContext } from "./context/NewWordContext";
import { useDispatch } from "react-redux";
import { addWord, deleteWord, updateWord } from "@/redux/states";
import { WordEntity } from "@/types/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { LoadingService } from "@/services/loading.service";
import { db } from "@/services/firebase";

const initContainerStyle = [styles.container];

export const SidePanel = ({ editWord }: { editWord: WordEntity }) => {
  const [containerStyle, setContainerStyle] =
    useState<string[]>(initContainerStyle);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const portalDiv: Element = document.getElementById("side-panel")!;
  const [engWord, setEngWord] = useState<string>(editWord.word);
  const [transWords, setTransWords] = useState<string[]>(editWord.translate);
  const [synonyms, setSynonyms] = useState<string[]>(editWord.synonyms);
  const dispatch = useDispatch();
  const value = useMemo(
    () => ({
      engWord,
      setEngWord,
      transWords,
      setTransWords,
      synonyms,
      setSynonyms,
    }),
    [engWord, transWords, synonyms]
  );

  const handleCloseClick = () => {
    addClass(styles["container-hide"]);
    setTimeout(() => {
      SidePanelService.setSubject(false);
    }, 400);
  };

  const handleDeleteClick = () => {
    setConfirmation(true);
  };

  // HELPER FUNTIONS
  const addClass = (newClass: string): void => {
    setContainerStyle((prev) => {
      const newData = prev.slice(0, 1);
      newData.push(newClass);
      return newData;
    });
  };

  const onSubmit = () => {
    const wordData = {
      word: engWord,
      translate: transWords,
      synonyms: synonyms,
      upadtedAt: new Date().toString(),
    };
    if (editWord.id === "") {
      const newWord: Omit<WordEntity, "id"> = {
        ...wordData,
        open: false,
        createdAt: wordData.upadtedAt!,
      };
      LoadingService.setSubject(true);
      addDoc(collection(db, "english"), newWord).then((response) => {
        dispatch(addWord({ ...newWord, id: response.id }));
        LoadingService.setSubject(false);
      });
    } else {
      const updatedWord: Omit<WordEntity, "id"> = {
        ...wordData,
        open: false,
        createdAt: editWord.createdAt,
      };
      LoadingService.setSubject(true);
      updateDoc(doc(db, "english", editWord.id), updatedWord).then(() => {
        dispatch(updateWord({ ...updatedWord, id: editWord.id }));
        LoadingService.setSubject(false);
      });
    }

    handleCloseClick();
  };

  const onDelete = () => {
    LoadingService.setSubject(true);
    deleteDoc(doc(db, "english", editWord.id)).then(() => {
      dispatch(deleteWord(editWord.id));
      handleCloseClick();
      LoadingService.setSubject(false);
    });
  };

  const isDisabled = engWord === "" || transWords.length === 0;

  return createPortal(
    <NewWordContext.Provider value={value}>
      <div className={styles.overlay} onClick={handleCloseClick}></div>
      <div className={containerStyle.join(" ")}>
        <div className={styles.main}>
          <div className={styles.header}>
            {!confirmation && (
              <div className={styles["close-btn"]}>
                <IconButton onClick={handleCloseClick}>
                  <span className="material-symbols-outlined">close</span>
                </IconButton>
              </div>
            )}
            <div className={styles.title}>
              <Typography color="dark">
                {confirmation
                  ? "¡Alerta!"
                  : editWord.id === ""
                  ? "New Word"
                  : "Edit Word"}
              </Typography>
            </div>
            {editWord.id !== "" && !confirmation && (
              <div className={styles["delete-btn"]}>
                <IconButton onClick={handleDeleteClick}>
                  <span className="material-symbols-outlined">delete</span>
                </IconButton>
              </div>
            )}
          </div>
          {confirmation ? (
            <div className={styles.confirmation}>
              <Typography variant="body2" color="dark">
                Are you sure you want to delete this word?
              </Typography>
            </div>
          ) : (
            <SidePanelBody createdAt={editWord.createdAt}></SidePanelBody>
          )}
        </div>
        <div className={styles.footer}>
          {confirmation ? (
            <div className={styles["action-confirmation"]}>
              <Button onClick={() => setConfirmation(false)}>Cancel</Button>
              <Button onClick={onDelete}>Delete</Button>
            </div>
          ) : (
            <Button disabled={isDisabled} onClick={onSubmit}>
              Save
            </Button>
          )}
        </div>
      </div>
    </NewWordContext.Provider>,
    portalDiv
  );
};
