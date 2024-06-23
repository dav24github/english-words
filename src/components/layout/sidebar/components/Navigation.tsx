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
        <span className="navigation-item--label">Home</span>
      </li>
      <li className={styles["navigation-item"]}>
        <span
          className={`${styles["navigation-item--icon"]} material-symbols-outlined`}
        >
          menu_book
        </span>
        <span className="navigation-item--label">Vocabulary</span>
      </li>
    </ul>
  );
};
