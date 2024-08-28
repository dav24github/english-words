import { WordEntity } from "@/types/types";
import { useMemo, useState } from "react";
import styles from "./Form.module.scss";
import { useDispatch } from "react-redux";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { LoadingService } from "@/services/loading.service";
import { addWord, deleteWord, updateWord } from "@/redux/states";
import { db } from "@/services/firebase";
import { NewWordContext } from "./context/NewWordContext";
import { IconButton } from "@/style-components";
import { Typography } from "../utils";
import { FormBody } from "./FormBody";
import { Button } from "../ui/Button";
import { SidePanelService } from "@/services/event-service";

export const Form = ({ editWord }: { editWord: WordEntity }) => {
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [engWord, setEngWord] = useState<{ value: string; error: boolean }>({
    value: editWord.word,
    error: false,
  });
  const [transWords, setTransWords] = useState<string[]>(editWord.translate);
  const [synonyms, setSynonyms] = useState<string[]>(editWord.synonyms);
  const [updateWords, setUpdateWords] = useState<WordEntity[]>([]);
  const dispatch = useDispatch();
  const value = useMemo(
    () => ({
      updateWords,
      setUpdateWords,
      engWord,
      setEngWord,
      transWords,
      setTransWords,
      synonyms,
      setSynonyms,
    }),
    [engWord, transWords, synonyms]
  );

  const handleDeleteClick = () => {
    setConfirmation(true);
  };

  // HELPER FUNTIONS

  const onSubmit = () => {
    const wordData = {
      word: engWord.value,
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

    if (updateWords.length > 0) {
      updateWords.map((obj) =>
        updateDoc(doc(db, "english", obj.id), {
          ...obj,
          synonyms: [...obj.synonyms, engWord.value],
        }).then(() => {
          dispatch(
            updateWord({
              ...obj,
              synonyms: [...obj.synonyms, engWord.value],
            })
          );
          LoadingService.setSubject(false);
        })
      );
    }

    SidePanelService.setSubject(false);
  };

  const onDelete = () => {
    LoadingService.setSubject(true);
    deleteDoc(doc(db, "english", editWord.id)).then(() => {
      dispatch(deleteWord(editWord.id));
      SidePanelService.setSubject(false);
      LoadingService.setSubject(false);
    });
  };

  const isDisabled =
    engWord.value === "" || engWord.error || transWords.length === 0;

  return (
    <NewWordContext.Provider value={value}>
      <div className={styles.main}>
        <div className={styles.header}>
          {!confirmation && (
            <div className={styles["close-btn"]}>
              <IconButton onClick={() => SidePanelService.setSubject(false)}>
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
          <FormBody createdAt={editWord.createdAt}></FormBody>
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
    </NewWordContext.Provider>
  );
};
