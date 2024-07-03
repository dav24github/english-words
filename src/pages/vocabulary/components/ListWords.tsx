import { WordCard } from "@/components/WordCard";
import styles from "../Vocabulary.module.scss";

export const ListWords = () => {
  return (
    <div className={styles["list"]}>
      <WordCard></WordCard>
      <WordCard></WordCard>
      <WordCard></WordCard>
      <WordCard></WordCard>
      <WordCard></WordCard>
    </div>
  );
};
