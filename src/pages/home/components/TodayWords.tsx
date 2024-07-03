import styles from "../Home.module.scss";
import { IconButton } from "@/style-components";
import { Typography, WordCard } from "@/components";
import { SidePanelService } from "@/services/side-panel-service";

export const TodayWords = () => {
  const handleAddClick = () => {
    SidePanelService.setSubject(true);
  };

  return (
    <div className={styles["section"]}>
      <Typography variant="h4" color="dark">
        Today
      </Typography>
      <div className={styles["today-list"]}>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
      </div>
      <IconButton onClick={handleAddClick}>
        <span className="material-symbols-outlined">add_circle</span>
      </IconButton>
    </div>
  );
};
