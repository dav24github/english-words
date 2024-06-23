import { Navigation, ProfileInfo } from "./components";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ProfileInfo></ProfileInfo>
      <Navigation></Navigation>
    </div>
  );
};

export default Sidebar;
