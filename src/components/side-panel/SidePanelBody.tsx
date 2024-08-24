import styles from "./SidePanel.module.scss";
import { useContext } from "react";
import { Divider } from "@/style-components";
import { Input } from "../ui/Input";
import { NewWordContext } from "./context/NewWordContext";
import { TNewWordContext } from "@/models/base";
import { Synonyms } from "./components/Synonyms";
import { Translate } from "./components/Translate";
import { Typography } from "../utils";
import dayjs from "dayjs";

export const SidePanelBody = ({ createdAt }: { createdAt: string }) => {
  const { engWord, setEngWord } = useContext(NewWordContext) as TNewWordContext;

  const handleOnChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setEngWord(e.currentTarget.value);
  };

  return (
    <div className={styles.body}>
      <Typography variant="body3" color="darker">
        Created at: {dayjs(createdAt).format("YYYY-MM-DD HH:mm")}
      </Typography>
      <Input
        value={engWord}
        hint="Some word..."
        handleOnChange={handleOnChangeInput}
      ></Input>
      <Synonyms />
      <Divider></Divider>
      <Translate />
    </div>
  );
};
