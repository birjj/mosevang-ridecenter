import type { PropsWithChildren } from "react";

import style from "./RootLayout.module.css";

export type LayoutProps = {};

const RootLayout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <div className={style.wrapper}>{children}</div>;
};
export default RootLayout;
