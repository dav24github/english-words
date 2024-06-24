import Sidebar from "./sidebar/Sidebar";
import style from "./MainLayout.module.scss";
import { ChildrenProps } from "@/models/base";

export const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div className={style.container}>
      <Sidebar></Sidebar>
      <main className={style.main}>{children}</main>
    </div>
  );
};
