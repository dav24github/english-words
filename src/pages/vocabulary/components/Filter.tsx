import { Typography } from "@/components/utils";
import styles from "../Vocabulary.module.scss";
import { TypeTabs } from "@/types/types";

export const Filter = ({
  tabs,
  onTabChange,
}: {
  tabs: TypeTabs[];
  onTabChange: (tabs: TypeTabs[]) => void;
}) => {
  const handleClickTab = (index: number): void => {
    const newData = tabs.map((obj) => ({ ...obj, active: false }));
    newData[index].active = true;

    onTabChange(newData);
  };

  return (
    <div className={styles["filter-container"]}>
      {tabs.map((obj, index) => {
        return (
          <div onClick={handleClickTab.bind(null, index)} key={index}>
            <Typography className={obj.active ? styles.active : ""}>
              {obj.label}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
