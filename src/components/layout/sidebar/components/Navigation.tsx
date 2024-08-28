import { Typography } from "@/components/utils";
import styles from "../Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { MenuService } from "@/services/event-service";

export const Navigation = ({ mobile }: { mobile?: boolean }) => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${styles["navigation-item"]} ${styles["navigation-item--active"]}`
      : `${styles["navigation-item"]}`;

  const handleOnClick = () => {
    if (mobile) MenuService.setSubject(false);
  };

  return (
    <ul className={styles["navigation"]}>
      <NavLink onClick={handleOnClick} className={linkStyle} to={"/"}>
        <span
          className={`${styles["navigation-item--icon"]} material-symbols-outlined`}
        >
          home
        </span>
        <Typography>Home</Typography>
      </NavLink>
      <NavLink onClick={handleOnClick} className={linkStyle} to={"/vocabulary"}>
        <span
          className={`${styles["navigation-item--icon"]} material-symbols-outlined`}
        >
          menu_book
        </span>
        <Typography>Vocabulary</Typography>
      </NavLink>
      <NavLink onClick={handleOnClick} className={linkStyle} to={"/phrases"}>
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
