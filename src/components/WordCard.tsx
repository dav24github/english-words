import { Typography } from "./utils";
import styles from "./WordCard.module.scss";

export const WordCard = () => {
  return (
    <div className={styles.card}>
      <Typography>World</Typography>
      <div className="divider"></div>
      {/* <Chip>Mundo</Chip> */}
    </div>
  );
};
