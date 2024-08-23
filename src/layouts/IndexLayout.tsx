import type { PropsWithChildren } from "react";
import RootLayout from "./RootLayout";

import style from "./IndexLayout.module.css";

export type IndexLayoutProps = {
  title: string;
};

const IndexLayout = ({
  children,
  title,
}: PropsWithChildren<IndexLayoutProps>) => {
  return (
    <RootLayout>
      <h1 className={style.hero}>{title}</h1>
      <nav>
        <a href="#velkommen">Velkommen</a>
        <a href="#faciliteter">Faciliteter</a>
        <a href="#regler">Regler</a>
        <a href="#priser">Priser</a>
        <a href="#om-os">Om os</a>
      </nav>
      {children}
    </RootLayout>
  );
};
export default IndexLayout;
