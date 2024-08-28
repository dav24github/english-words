import Sidebar from "./sidebar/Sidebar";
import style from "./MainLayout.module.scss";
import { ChildrenProps } from "@/models/base";
import { SidePanel } from "../side-panel/SidePanel";
import { SidePanelService } from "@/services/event-service";
import { useEffect, useState } from "react";
import { WordEntity } from "@/types/types";
import { Form } from "../form/Form";

const emptyWord = {
  id: "",
  word: "",
  translate: [],
  synonyms: [],
  open: false,
  createdAt: "",
  upadtedAt: "",
};

export const MainLayout = ({ children }: ChildrenProps) => {
  const [editWord, setEditWord] = useState<WordEntity>(emptyWord);
  const sidePanel$ = SidePanelService.getSubject();

  useEffect(() => {
    sidePanel$.subscribe((data) => {
      if (typeof data === "boolean") {
        if (data === false) setEditWord(emptyWord);
      } else {
        setEditWord(data.payload);
      }
    });
  }, []);

  return (
    <>
      <SidePanel eventService={SidePanelService}>
        <Form editWord={editWord} />
      </SidePanel>
      <div className={style.container}>
        <Sidebar></Sidebar>
        <main className={style.main}>{children}</main>
      </div>
    </>
  );
};
