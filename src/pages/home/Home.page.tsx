import { HeaderHome, RecentWords, TodayWords } from "./components";
import style from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={style.container}>
      <HeaderHome></HeaderHome>
      <TodayWords></TodayWords>
      <RecentWords></RecentWords>
    </div>
  );
};
