import { WordCard } from "@/components/WordCard";
import styles from "../Vocabulary.module.scss";
import { Typography } from "@/components";
import dayjs from "dayjs";
import { WordEntity } from "@/types/types";
import { Fragment } from "react/jsx-runtime";

export const ListWordsDateSort = ({
  rangeWeek,
  wordsByRangeWeek,
}: {
  rangeWeek: string[][];
  wordsByRangeWeek: WordEntity[][];
}) => {
  return (
    <div className={styles["container"]}>
      {rangeWeek.length === 0 ? (
        <Typography color="darker">Vocabulary is empty!</Typography>
      ) : (
        rangeWeek.map((week, i) =>
          wordsByRangeWeek[i].length === 0 ? (
            <Fragment key={i}></Fragment>
          ) : (
            <div key={i} className={styles["section"]}>
              <div className={styles["section-title"]}>
                <Typography variant="body2" color="darker">
                  {`${dayjs(week[6]).format("MMMM D")}, ${dayjs(week[6]).format(
                    "YYYY"
                  )}`}
                </Typography>
                <Typography variant="body2" color="darker">
                  to
                </Typography>
                <Typography variant="body2" color="darker">
                  {dayjs(week[0]).format("MMMM D")}
                </Typography>
              </div>
              <div className={styles["list"]}>
                {wordsByRangeWeek[i].map((item, index) => (
                  <WordCard key={index} data={item}></WordCard>
                ))}
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};
