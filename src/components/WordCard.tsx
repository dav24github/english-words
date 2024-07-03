import { Card, ChipWord } from "@/style-components";
import { Typography } from "./utils";
import styles from "./WordCard.module.scss";
import { useState } from "react";

export const WordCard = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Card onClick={handleClick}>
      <Typography>Hello World!</Typography>
      {showMore && (
        <>
          <div className={styles.divider}></div>
          <div className={styles["translate-box"]}>
            <ChipWord>
              <Typography variant="body2">Mundo</Typography>
            </ChipWord>
            <ChipWord>
              <Typography variant="body2">Planeta</Typography>
            </ChipWord>
            <ChipWord>
              <Typography variant="body2">Planeta 1</Typography>
            </ChipWord>
            <ChipWord>
              <Typography variant="body2">Planeta 2</Typography>
            </ChipWord>
            <ChipWord>
              <Typography variant="body2">Planeta 3</Typography>
            </ChipWord>
          </div>
        </>
      )}
    </Card>
  );
};
