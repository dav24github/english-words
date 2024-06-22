type ChildrenProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <p>Main Layout</p>
      {children}
    </>
  );
};
