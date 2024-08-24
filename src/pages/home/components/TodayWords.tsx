import styles from "../Home.module.scss";
import { IconButton } from "@/style-components";
import { Typography, WordCard } from "@/components";
import { SidePanelService } from "@/services/event-service";
import { SectionWordsContext } from "@/context/SectionWordsCtx";
import { useSectionWordsContextValue } from "@/hooks/useSectionContext";
import dayjs from "dayjs";
import { useMemo } from "react";
import { WordEntity } from "@/types/types";

const chunkSize = 5;
export const TodayWords = () => {
  const { value } = useSectionWordsContextValue();

  const todayListGroups: WordEntity[][] = useMemo(() => {
    const words = value.words.filter(
      (obj) =>
        dayjs(obj.createdAt).format("YYYY-MM-DD") ==
        dayjs().format("YYYY-MM-DD")
    );
    const todayListGroupsData = [];
    for (let i = 0; i < words.length; i += chunkSize) {
      const chunk = words.slice(i, i + chunkSize);
      todayListGroupsData.push(chunk);
    }
    return todayListGroupsData;
  }, [value.words]);

  const handleAddClick = () => {
    SidePanelService.setSubject(true);
  };

  return (
    <SectionWordsContext.Provider value={value}>
      <div className={styles["section"]}>
        <div className={styles["header"]}>
          <Typography variant="h4" color="dark">
            Today
          </Typography>
          <IconButton onClick={handleAddClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </IconButton>
        </div>
        <div className={styles["container"]}>
          {todayListGroups.map((todayList, index) => (
            <div key={index} className={styles["today-list"]}>
              {todayList.map((item, i) => (
                <div key={i} className={styles["today-list--item"]}>
                  <Typography>{chunkSize * index + i + 1}.</Typography>
                  <WordCard data={item}></WordCard>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SectionWordsContext.Provider>
  );
};
