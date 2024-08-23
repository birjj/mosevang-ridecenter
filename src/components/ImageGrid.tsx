import type React from "react";

import style from "./ImageGrid.module.css";

export default function ImageGrid(props: React.PropsWithChildren<{}>) {
  return <div className={style.grid}>{props.children}</div>;
}
