import { Typography } from "@/components/utils";
import styles from "../Sidebar.module.scss";

export const Navigation = () => {
  return (
    <ul className={styles["navigation"]}>
      <li
        className={`${styles["navigation-item"]} ${styles["navigation-item--active"]}`}
      >
        <span
          className={`${styles["navigation-item--icon"]} material-symbols-outlined`}
        >
          home
        </span>
        <Typography>Home</Typography>
      </li>
      <li className={styles["navigation-item"]}>
        <span
          className={`${styles["navigation-item--icon"]} material-symbols-outlined`}
        >
          menu_book
        </span>
        <Typography>Vocabulary</Typography>
      </li>
    </ul>
  );
};
