import styles from "../Home.module.scss";
import { IconButton } from "@/style-components";
import { Typography, WordCard } from "@/components";
import { SidePanelService } from "@/services/event-service";
import { SectionWordsContext } from "@/context/SectionWordsCtx";
import { useSectionWordsContextValue } from "@/hooks/useSectionContext";
import dayjs from "dayjs";
import { useMemo } from "react";

export const TodayWords = () => {
  const { value } = useSectionWordsContextValue();

  const todayList = useMemo(
    () =>
      value.words.filter(
        (obj) =>
          dayjs(obj.createdAt).format("YYYY-MM-DD") ==
          dayjs().format("YYYY-MM-DD")
      ),
    [value.words]
  );

  const handleAddClick = () => {
    SidePanelService.setSubject(true);
  };

  return (
    <SectionWordsContext.Provider value={value}>
      <div className={styles["section"]}>
        <Typography variant="h4" color="dark">
          Today
        </Typography>
        <div className={styles["today-list"]}>
          {todayList.map((item, index) => (
            <WordCard key={index} data={item}></WordCard>
          ))}
        </div>
        <IconButton onClick={handleAddClick}>
          <span className="material-symbols-outlined">add_circle</span>
        </IconButton>
      </div>
    </SectionWordsContext.Provider>
  );
};
