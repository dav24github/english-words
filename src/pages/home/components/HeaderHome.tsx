import { Typography } from "@/components/utils";
import styles from "../Home.module.scss";
import { theme } from "@/utils";

export const HeaderHome = () => {
  return (
    <div className={styles["header-container"]}>
      <Typography variant="h1">Hello, Jacob</Typography>
      <Typography color={theme.palette.grey[200]}>Welcome back home</Typography>
    </div>
  );
};
