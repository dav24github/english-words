import styles from "./Form.module.scss";
import { useContext } from "react";
import { Divider } from "@/style-components";
import { Input } from "../ui/Input";
import { NewWordContext } from "./context/NewWordContext";
import { TNewWordContext } from "@/models/base";
import { Synonyms } from "./components/Synonyms";
import { Translate } from "./components/Translate";
import { Typography } from "../utils";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/store";

export const FormBody = ({ createdAt }: { createdAt: string }) => {
  const storeWords = useSelector((state: IRootState) => state.words);
  const { engWord, setEngWord } = useContext(NewWordContext) as TNewWordContext;

  const handleOnChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const wordExists = storeWords.find(
      (obj) =>
        obj.word.toLocaleLowerCase() ===
        e.currentTarget.value.toLocaleLowerCase()
    );

    let error = false;
    if (!createdAt && wordExists) error = true;

    setEngWord({
      value: e.currentTarget.value,
      error: error,
    });
  };

  return (
    <div className={styles.body}>
      {createdAt && (
        <Typography variant="body3" color="darker">
          Created at: {dayjs(createdAt).format("YYYY-MM-DD HH:mm")}
        </Typography>
      )}
      <Input
        value={engWord.value}
        hint="Some word..."
        handleOnChange={handleOnChangeInput}
        error={engWord.error}
      ></Input>
      {engWord.error && (
        <Typography className={styles.error} variant="body3" color="error">
          word existed already!
        </Typography>
      )}
      <Synonyms />
      <Divider></Divider>
      <Translate />
    </div>
  );
};
