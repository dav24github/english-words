import { Card, ChipWord } from "@/style-components";
import { Typography } from "./utils";
import styles from "./WordCard.module.scss";
import { WordCtx, WordEntity } from "@/types/types";
import { useContext } from "react";
import { SectionWordsContext } from "@/context/SectionWordsCtx";
import { SidePanelService } from "@/services/event-service";

export const WordCard = ({ data }: { data: WordEntity }) => {
  const { words, setWords } = useContext(SectionWordsContext) as WordCtx;

  const handleClick = () => {
    const indexItem = words.findIndex((item) => item.id == data.id);

    const clickedItem = words[indexItem];
    const newData = words.map((obj) => ({ ...obj, open: false }));
    newData[indexItem].open = !clickedItem?.open;

    setWords(newData);
  };

  const handleEditWord = () => {
    SidePanelService.setSubject({
      show: true,
      payload: data,
    });
  };

  return (
    <Card onClick={handleClick}>
      <Typography className={styles.word}>{data.word}</Typography>
      {data.open && (
        <>
          <div className={styles.divider}></div>
          <div className={styles["translate-box"]}>
            {data.translate.map((item, index) => (
              <ChipWord key={index}>
                <Typography variant="body2">{item}</Typography>
              </ChipWord>
            ))}
          </div>
          {data.synonyms.length !== 0 && (
            <>
              <div className={styles.divider}></div>
              <div className={` ${styles["synonyms-icon"]}`}>
                <span className="material-symbols-outlined">sync</span>
                <div className={styles.popover}>
                  <ul>
                    {data.synonyms.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
          <div className={styles.divider}></div>
          <div onClick={handleEditWord} className={` ${styles["edit-icon"]}`}>
            <span className="material-symbols-outlined">edit</span>
          </div>
        </>
      )}
    </Card>
  );
};
