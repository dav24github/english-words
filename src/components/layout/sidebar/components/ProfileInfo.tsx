import { Typography } from "@/components/utils";
import style from "../Sidebar.module.scss";
import dayjs from "dayjs";

export const ProfileInfo = () => {
  return (
    <div className={style["profile-wrapper"]}>
      <div className={style["profile-photo"]}>
        <img src="./uk.jpg" alt="uk" />
      </div>
      <div className={style["profile-detail"]}>
        <Typography variant="h4">David's House</Typography>
        <Typography variant="body2" color="darker">
          {dayjs().format("dddd - MMMM D, YYYY")}
        </Typography>
      </div>
    </div>
  );
};
