import styles from "../Home.module.scss";

export const HeaderHome = () => {
  return (
    <div className={styles["header-container"]}>
      <span className={styles["header-name"]}>Hello, Jacob</span>
      <span className={styles["header-desc"]}>Welcome back home</span>
    </div>
  );
};
