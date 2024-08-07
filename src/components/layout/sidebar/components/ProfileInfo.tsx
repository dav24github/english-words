import { Typography } from "@/components/utils";
import style from "../Sidebar.module.scss";

export const ProfileInfo = () => {
  return (
    <div className={style["profile-wrapper"]}>
      <div className={style["profile-photo"]}></div>
      <div className={style["profile-detail"]}>
        <Typography variant="h4">Jacob's House</Typography>
        <Typography variant="body2" color="darker">
          Saturday - September 8, 2023
        </Typography>
      </div>
    </div>
  );
};
