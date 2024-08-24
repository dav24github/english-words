import { LayoutContainer } from "@/style-components/layout-container";
import { HeaderHome, RecentWords, TodayWords } from "./components";

export const Home = () => {
  return (
    <LayoutContainer>
      <HeaderHome />
      <TodayWords />
      <RecentWords></RecentWords>
    </LayoutContainer>
  );
};
