import type { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <p>Bonjour :)</p>
      {children}
    </>
  );
};
export default RootLayout;
