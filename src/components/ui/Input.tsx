import styles from "./Input.module.scss";

type InputProps = {
  value: string;
  hint?: string;
  handleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  type?: string;
  error?: boolean;
};

export const Input = ({
  value,
  hint,
  handleOnChange,
  icon,
  type,
  error,
}: InputProps) => {
  return (
    <div
      className={[
        styles.input,
        icon ? styles.icon : "",
        type === "chip" ? styles.chip : "",
        error ? styles.error : "",
      ].join(" ")}
    >
      {icon}
      <input
        type="text"
        value={value}
        placeholder={hint}
        onChange={handleOnChange}
      />
    </div>
  );
};
