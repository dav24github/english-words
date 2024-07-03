import { createPortal } from "react-dom";
import styles from "./SidePanel.module.scss";
import { useState } from "react";
import { IconButton } from "@/style-components";
import { SidePanelService } from "@/services/side-panel-service";
import { Typography } from "../utils";
import { Button } from "../ui/Button";
import { SidePanelBody } from "./SidePanelBody";

const initContainerStyle = [styles.container];

export const SidePanel = () => {
  const [containerStyle, setContainerStyle] =
    useState<string[]>(initContainerStyle);
  const portalDiv: Element = document.getElementById("side-panel")!;

  const handleCloseClick = () => {
    addClass(styles["container-hide"]);
    setTimeout(() => {
      SidePanelService.setSubject(false);
    }, 400);
  };

  // HELPER FUNTIONS
  const addClass = (newClass: string): void => {
    setContainerStyle((prev) => {
      const newData = prev.slice(0, 1);
      newData.push(newClass);
      return newData;
    });
  };

  return createPortal(
    <>
      <div className={styles.overlay} onClick={handleCloseClick}></div>
      <div className={containerStyle.join(" ")}>
        <div className={styles.header}>
          <div className={styles["close-btn"]}>
            <IconButton onClick={handleCloseClick}>
              <span className="material-symbols-outlined">close</span>
            </IconButton>
          </div>
          <div className={styles.title}>
            <Typography color="dark">New Word</Typography>
          </div>
        </div>
        <SidePanelBody></SidePanelBody>
        <div className={styles.footer}>
          <Button>Save</Button>
        </div>
      </div>
    </>,
    portalDiv
  );
};
