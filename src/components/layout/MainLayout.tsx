import Sidebar from "./sidebar/Sidebar";
import style from "./MainLayout.module.scss";
import { ChildrenProps } from "@/models/base";
import { SidePanel } from "../side-panel/SidePanel";
import { SidePanelService } from "@/services/side-panel-service";
import { useEffect, useState } from "react";

export const MainLayout = ({ children }: ChildrenProps) => {
  const [showSidePanel, setShowSidePanel] = useState<boolean>(true);
  const subscription$ = SidePanelService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => {
      setShowSidePanel(data);
    });
  }, []);

  return (
    <>
      {showSidePanel && <SidePanel></SidePanel>}
      <div className={style.container}>
        <Sidebar></Sidebar>
        <main className={style.main}>{children}</main>
      </div>
    </>
  );
};
