import { IconButton } from "@/style-components";
import { Navigation, ProfileInfo } from "./components";
import styles from "./Sidebar.module.scss";
import { MenuService } from "@/services/event-service";
import { SidePanel } from "@/components/side-panel/SidePanel";

const Sidebar = () => {
  const handleOnClick = () => {
    MenuService.setSubject(true);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <ProfileInfo></ProfileInfo>
        <Navigation></Navigation>
      </div>
      <div className={styles["sidebar-mobile"]}>
        <IconButton onClick={handleOnClick}>
          <span className="material-symbols-outlined">menu</span>
        </IconButton>
        <SidePanel position="left" eventService={MenuService}>
          <ProfileInfo></ProfileInfo>
          <Navigation mobile></Navigation>
        </SidePanel>
      </div>
    </>
  );
};

export default Sidebar;
