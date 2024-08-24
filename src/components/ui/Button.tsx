import { ButtonProps } from "@/models/base";
import styles from "./Button.module.scss";

export const Button = ({ disabled, children, onClick }: ButtonProps) => {
  const btnStyles = [styles.btn];
  if (disabled) btnStyles.push(styles.disabled);

  return (
    <button className={btnStyles.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
