import { Typography } from "@/components/utils";
import styles from "../Home.module.scss";

export const HeaderHome = () => {
  return (
    <div className={styles["header-container"]}>
      <Typography variant="h1">Hello, David</Typography>
      <Typography color="darker">Welcome back home</Typography>
    </div>
  );
};
