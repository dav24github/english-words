type typoProps = {
  variant: string;
  color: string;
  children: React.ReactNode;
};

export const Typography = ({ variant, color, children }: typoProps) => {
  return (
    <span
      style={{
        fontSize: variant,
        color: color,
      }}
    >
      {children}
    </span>
  );
};
