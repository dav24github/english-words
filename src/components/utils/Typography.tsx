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
  return (
    <span
      className={[variant ? styles[variant] : "", className].join(" ")}
      style={{ color: color ?? "" }}
    >
      {children}
    </span>
  );
};
