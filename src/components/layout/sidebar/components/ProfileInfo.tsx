import style from "../Sidebar.module.scss";

export const ProfileInfo = () => {
  return (
    <div className={style["profile-wrapper"]}>
      <div className={style["profile-photo"]}></div>
      <div className={style["profile-detail"]}>
        <p className={style["profile-detail--name"]}>Jacob's House</p>
        <p className={style["profile-detail--desc"]}>
          Saturday - September 8, 2023
        </p>
      </div>
    </div>
  );
};
