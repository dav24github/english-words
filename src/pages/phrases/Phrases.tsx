import { IconButton } from "@/style-components";
import styles from "./Phrases.module.scss";
import { Input } from "@/components";
import { useEffect, useState } from "react";
import { LoadingService } from "@/services/loading.service";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/services/firebase";

const emptyPhrase = {
  id: "",
  value: "",
};
type TPhrase = { id?: string; value: string };

export const Phrases = () => {
  const [newPhrase, setNewPhrase] = useState<TPhrase>(emptyPhrase);
  const [showInput, setShowInput] = useState(false);
  const [phrases, setPhrases] = useState<TPhrase[]>([]);

  const fetchData = async () => {
    LoadingService.setSubject(true);
    await getDocs(collection(db, "phrases")).then((querySnapshot) => {
      const phrasesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setPhrases(phrasesData as TPhrase[]);
      LoadingService.setSubject(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setNewPhrase({ value: e.currentTarget.value });
  };

  const hanldeAdd = () => {
    if (newPhrase.value == "") {
      setShowInput(false);
      return;
    }

    LoadingService.setSubject(true);
    addDoc(collection(db, "phrases"), { value: newPhrase.value }).then(
      (response) => {
        const newPhrases = [...phrases];
        newPhrases.push({ id: response.id, value: newPhrase.value });
        setPhrases(newPhrases);
        setNewPhrase(emptyPhrase);
        setShowInput(false);
        LoadingService.setSubject(false);
      }
    );
  };

  const hanldeDelete = (id: string) => {
    LoadingService.setSubject(true);
    deleteDoc(doc(db, "phrases", id)).then(() => {
      const newPhrases = phrases.filter((obj) => obj.id !== id);
      setPhrases(newPhrases);
      LoadingService.setSubject(false);
    });
  };

  return (
    <div className={styles.root}>
      {phrases.map((obj, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.chip}>
            <span>{obj.value}</span>
          </div>
          <IconButton
            onClick={hanldeDelete.bind(null, obj.id!)}
            className={["btn-icon", styles["small-icon"]].join(" ")}
          >
            <span className="material-symbols-outlined">remove</span>
          </IconButton>
        </div>
      ))}
      {showInput && (
        <>
          <div className={styles.newContainer}>
            <IconButton onClick={hanldeAdd} className={styles["small-icon"]}>
              <span className="material-symbols-outlined">
                {newPhrase.value === "" ? "close" : "check"}
              </span>
            </IconButton>
            <Input
              value={newPhrase.value}
              hint="Some phrase..."
              handleOnChange={handleOnChangeInput}
            ></Input>
          </div>
        </>
      )}
      <IconButton onClick={() => setShowInput(true)}>
        <span className="material-symbols-outlined">add_circle</span>
      </IconButton>
    </div>
  );
};
