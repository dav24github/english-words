type typoProps = {
  variant: string;
  color: string;
  children: React.ReactNode;
};

export const Typography = ({ variant, color, children }: typoProps) => {
  return (
    <span className={`.${variant}`} style={{ color: color }}>
      {children}
    </span>
  );
};
