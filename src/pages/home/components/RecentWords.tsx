import styles from "../Home.module.scss";
import { Typography, WordCard } from "@/components";
import { SectionWordsContext } from "@/context/SectionWordsCtx";
import { useSectionWordsContextValue } from "@/hooks/useSectionContext";
import dayjs from "dayjs";
import { useMemo } from "react";

export const RecentWords = () => {
  const { value } = useSectionWordsContextValue();

  const recentList = useMemo(
    () =>
      value.words.filter((obj) =>
        dayjs(obj.createdAt).isAfter(dayjs().subtract(3, "days"))
      ),
    [value.words]
  );

  return (
    <SectionWordsContext.Provider value={value}>
      <div className={styles["section"]}>
        <Typography variant="h4" color="dark">
          Recent words
        </Typography>
        <div className={styles["recent-list"]}>
          {recentList.map((item, index) => (
            <WordCard key={index} data={item}></WordCard>
          ))}
        </div>
      </div>
    </SectionWordsContext.Provider>
  );
};
