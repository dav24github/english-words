import styles from "../Form.module.scss";
import { useContext, useState } from "react";
import { IconButton } from "@/style-components";
import { theme } from "@/utils";
import { TNewWordContext } from "@/models/base";
import { NewWordContext } from "../context/NewWordContext";
import { Typography } from "@/components/utils";
import { Input } from "@/components/ui/Input";

export const Synonyms = () => {
  const { synonyms, setSynonyms } = useContext(
    NewWordContext
  ) as TNewWordContext;

  const [showInputSynoWord, setShowInputSynoWord] = useState<boolean>(false);
  const [newSynoWord, setNewSynoWord] = useState<string>("");

  const [synoIcon, setSynoIcon] = useState<string>("add");

  const handleOnChangeSynoChipInput = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const value = e.currentTarget.value;

    if (value === "") setSynoIcon("close");
    else setSynoIcon("check");

    setNewSynoWord(value);
  };

  const handleAddSynoClick = () => {
    if (synoIcon === "check") {
      setSynonyms((prev) => {
        const newData = [...prev];
        newData.push(newSynoWord);
        return newData;
      });
      setSynoIcon("add");
      setNewSynoWord("");
      setShowInputSynoWord(false);
    }

    if (synoIcon === "add") {
      setShowInputSynoWord(true);
      setSynoIcon("close");
    }

    if (synoIcon === "close") {
      setShowInputSynoWord(false);
      setSynoIcon("add");
    }
  };

  const handleRemoveSynoClick = (index: number) => {
    setSynonyms((prev) => {
      const newData = [...prev];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className={styles["synon-container"]}>
      <Typography color="darker">Synonyms</Typography>
      <div className={styles["synon-wrapper"]}>
        {synonyms.map((item, index) => (
          <div
            className={styles["syno-item"]}
            key={index}
            onClick={handleRemoveSynoClick.bind(null, index)}
          >
            <Typography key={index} color={theme.palette.grey[100]}>
              {item}
            </Typography>
          </div>
        ))}
        {showInputSynoWord && (
          <Input
            value={newSynoWord}
            type="chip"
            handleOnChange={handleOnChangeSynoChipInput}
          ></Input>
        )}
        <IconButton
          className={styles["small-icon"]}
          onClick={handleAddSynoClick}
        >
          <span className="material-symbols-outlined">
            {synoIcon === "add"
              ? "add"
              : synoIcon === "close"
              ? "close"
              : "check"}
          </span>
        </IconButton>
      </div>
    </div>
  );
};
