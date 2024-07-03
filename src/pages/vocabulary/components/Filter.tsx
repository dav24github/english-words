import { Typography } from "@/components/utils";
import styles from "../Vocabulary.module.scss";
import { useState } from "react";

type TypeTabs = {
  label: string;
  active: boolean;
};

const initTabs: TypeTabs[] = [
  {
    label: "Recent",
    active: true,
  },
  {
    label: "Aleatorio",
    active: false,
  },
  {
    label: "Sinonimos",
    active: false,
  },
];

export const Filter = () => {
  const [tabs, setTabs] = useState<TypeTabs[]>(initTabs);

  const handleClickTab = (index: number): void => {
    setTabs((prev) => {
      const newData = prev.map((obj) => ({ ...obj, active: false }));
      newData[index].active = true;
      return newData;
    });
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
