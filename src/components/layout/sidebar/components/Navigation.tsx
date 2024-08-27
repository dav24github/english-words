import { Typography } from "@/components/utils";
import styles from "../Sidebar.module.scss";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${styles["navigation-item"]} ${styles["navigation-item--active"]}`
      : `${styles["navigation-item"]}`;

  return (
    <ul className={styles["navigation"]}>
      <NavLink className={linkStyle} to={"/"}>
        <span
          className={`${styles["navigation-item--icon"]} material-symbols-outlined`}
        >
          home
        </span>
        <Typography>Home</Typography>
      </NavLink>
      <NavLink className={linkStyle} to={"/vocabulary"}>
        <span
          className={`${styles["navigation-item--icon"]} material-symbols-outlined`}
        >
          menu_book
        </span>
        <Typography>Vocabulary</Typography>
      </NavLink>
      <NavLink className={linkStyle} to={"/phrases"}>
        <span
          className={`${styles["navigation-item--icon"]} material-symbols-outlined`}
        >
          book
        </span>
        <Typography>Phrases</Typography>
      </NavLink>
    </ul>
  );
};
