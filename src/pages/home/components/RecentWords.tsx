import styles from "../Home.module.scss";
import { Typography, WordCard } from "@/components";

export const RecentWords = () => {
  return (
    <div className={styles["section"]}>
      <Typography variant="h4" color="dark">
        Recent words
      </Typography>
      <div className={styles["recent-list"]}>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
      </div>
    </div>
  );
};
