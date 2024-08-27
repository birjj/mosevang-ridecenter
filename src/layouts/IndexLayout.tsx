import type { PropsWithChildren } from "react";
import RootLayout from "./RootLayout";

export type IndexLayoutProps = {};

const IndexLayout = ({ children }: PropsWithChildren<IndexLayoutProps>) => {
  return <RootLayout>{children}</RootLayout>;
};
export default IndexLayout;
