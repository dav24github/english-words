import { useLoading } from "@/hooks/useLoading";
import { createPortal } from "react-dom";
import styles from "./LoadingSpinner.module.scss";
import { Typography } from "./utils";

export const LoadingSpinner = () => {
  const isLoading = useLoading();
  const portalElement = document.getElementById("loading");

  return (
    <>
      {isLoading && (
        <>
          {createPortal(
            <div className={styles.root}>
              <Typography color="dark" variant="h4">
                Loading...
              </Typography>
            </div>,
            portalElement!
          )}
        </>
      )}
    </>
  );
};
