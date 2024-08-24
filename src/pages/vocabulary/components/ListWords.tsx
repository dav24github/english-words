import { WordCard } from "@/components/WordCard";
import styles from "../Vocabulary.module.scss";
import { Typography } from "@/components";
import { WordEntity } from "@/types/types";

export const ListWords = ({ words }: { words: WordEntity[] }) => {
  return (
    <div className={styles["container"]}>
      {words.length === 0 ? (
        <Typography color="darker">Nothing to show.</Typography>
      ) : (
        <div className={styles["list"]}>
          {words.map((item, index) => (
            <WordCard key={index} data={item}></WordCard>
          ))}
        </div>
      )}
    </div>
  );
};
