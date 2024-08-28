import { createPortal } from "react-dom";
import styles from "./SidePanel.module.scss";
import { useEffect, useState } from "react";
import { ChildrenProps } from "@/models/base";
import { SubjectManager } from "@/utils/subject-manager";
import { TSidePanel } from "@/services/event-service";

export const SidePanel = ({
  children,
  eventService,
  position,
}: ChildrenProps & {
  eventService: SubjectManager<TSidePanel | boolean> | SubjectManager<boolean>;
  position?: "left" | "right";
}) => {
  const initContainerStyle =
    position === "left"
      ? [styles.container, styles.left]
      : [styles.container, styles.right];

  const [containerStyle, setContainerStyle] =
    useState<string[]>(initContainerStyle);
  const portalDiv: Element = document.getElementById("side-panel")!;
  const [showSidePanel, setShowSidePanel] = useState<boolean>(false);
  const sidePanel$ = eventService.getSubject();

  useEffect(() => {
    sidePanel$.subscribe((data: any) => {
      let value;
      if (typeof data === "boolean") {
        value = data;
      } else {
        value = data.show;
      }
      if (!value) {
        addClass(
          styles[
            position === "left"
              ? "container-hide--left"
              : "container-hide--right"
          ]
        );
        setTimeout(() => {
          setShowSidePanel(value);
          setContainerStyle(initContainerStyle);
        }, 400);
      } else {
        setShowSidePanel(value);
      }
    });
  }, []);

  const addClass = (newClass: string): void => {
    setContainerStyle((prev) => {
      const newData = prev.slice(0, 1);
      newData.push(newClass);
      return newData;
    });
  };

  return (
    <>
      {showSidePanel &&
        createPortal(
          <>
            <div
              className={styles.overlay}
              onClick={() => eventService.setSubject(false)}
            ></div>
            <div className={containerStyle.join(" ")}>{children}</div>
          </>,
          portalDiv
        )}
    </>
  );
};
