import styles from "../SidePanel.module.scss";
import { useContext, useState } from "react";
import { ChipWord, IconButton } from "@/style-components";
import { TNewWordContext } from "@/models/base";
import { NewWordContext } from "../context/NewWordContext";
import { Typography } from "@/components/utils";
import { Input } from "@/components/ui/Input";

export const Translate = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { transWords, setTransWords } = useContext(
    NewWordContext
  ) as TNewWordContext;

  const [newTransWord, setNewTransWord] = useState<string>("");

  const handleOnChangeChipInput = (e: React.FormEvent<HTMLInputElement>) => {
    setNewTransWord(e.currentTarget.value);
  };

  const handleAddTransClick = () => {
    setTransWords((prev) => {
      const newData = [...prev];
      newData.push(newTransWord);
      return newData;
    });

    setNewTransWord("");
    setShowInput(false);
  };

  const handleRemoveTransClick = (index: number) => {
    setTransWords((prev) => {
      const newData = [...prev];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className={styles["esp-list"]}>
      <div className={styles["title"]}>
        <Typography variant="h4" color="darker">
          Translate
        </Typography>
        <span className={`${styles["trans-icon"]} material-symbols-outlined`}>
          translate
        </span>
      </div>
      {transWords.map((item, index) => (
        <div key={index} className={styles["list-item"]}>
          <ChipWord>{item}</ChipWord>
          <IconButton
            onClick={handleRemoveTransClick.bind(null, index)}
            className={styles["small-icon"]}
          >
            <span className="material-symbols-outlined">remove</span>
          </IconButton>
        </div>
      ))}
      {showInput && (
        <div className={styles["new-word-container"]}>
          <Input
            value={newTransWord}
            type="chip"
            handleOnChange={handleOnChangeChipInput}
          ></Input>
          <IconButton
            className={styles["small-icon"]}
            onClick={
              newTransWord === ""
                ? () => setShowInput(false)
                : handleAddTransClick
            }
          >
            <span className="material-symbols-outlined">
              {newTransWord === "" ? "close" : "check"}
            </span>
          </IconButton>
        </div>
      )}
      <IconButton onClick={() => setShowInput(true)}>
        <span className="material-symbols-outlined">add_circle</span>
      </IconButton>
    </div>
  );
};
