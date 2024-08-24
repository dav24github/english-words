import { theme } from "@/utils";
import styles from "./Typography.module.scss";

type typoProps = {
  variant?: string;
  color?: string;
  className?: string;
  children: React.ReactNode;
};

export const Typography = ({
  variant,
  color,
  className,
  children,
}: typoProps) => {
  let colorVal: string | undefined = "";
  switch (color) {
    case "dark":
      colorVal = theme.palette.grey[100];
      break;
    case "darker":
      colorVal = theme.palette.grey[200];
      break;
    case "error":
      colorVal = theme.palette.error;
      break;
    default:
      colorVal = color;
  }

  return (
    <span
      className={[variant ? styles[variant] : "", className].join(" ")}
      style={{
        display: "block",
        color: colorVal ?? "",
      }}
    >
      {children}
    </span>
  );
};
