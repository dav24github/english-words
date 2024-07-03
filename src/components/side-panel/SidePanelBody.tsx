import styles from "./SidePanel.module.scss";
import { useState } from "react";
import { ChipWord, IconButton } from "@/style-components";
import { Input } from "../ui/Input";

export const SidePanelBody = () => {
  const [engWord, setEngWord] = useState("");
  const [transWord, setTransWord] = useState("");

  const handleOnChangeChipInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTransWord(e.currentTarget.value);
  };

  const handleOnChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setEngWord(e.currentTarget.value);
  };

  const handleAddClick = () => {};

  return (
    <div className={styles.body}>
      <Input
        value={engWord}
        hint="Some word..."
        handleOnChange={handleOnChangeInput}
      ></Input>
      <div className={styles["body-list"]}>
        <div className={styles["list-item"]}>
          <IconButton onClick={handleAddClick}>
            <span className="material-symbols-outlined">remove</span>
          </IconButton>
          <ChipWord>Wor</ChipWord>
        </div>
        <div className={styles["list-item"]}>
          <IconButton onClick={handleAddClick}>
            <span className="material-symbols-outlined">remove</span>
          </IconButton>
          <ChipWord>Words1</ChipWord>
        </div>
        <div className={styles["list-item"]}>
          <IconButton onClick={handleAddClick}>
            <span className="material-symbols-outlined">remove</span>
          </IconButton>
          <ChipWord>Word1as</ChipWord>
        </div>
        <Input
          value={transWord}
          type="chip"
          handleOnChange={handleOnChangeChipInput}
        ></Input>
        <IconButton onClick={handleAddClick}>
          <span className="material-symbols-outlined">add_circle</span>
        </IconButton>
      </div>
    </div>
  );
};
