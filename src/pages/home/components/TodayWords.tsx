import { WordCard } from "@/components/WordCard";
import styles from "../Home.module.scss";

export const TodayWords = () => {
  return (
    <div>
      <span className={styles["today-title"]}>Today</span>
      <WordCard></WordCard>
    </div>
  );
};
