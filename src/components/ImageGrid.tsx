import type React from "react";
import yamz from "yet-another-medium-zoom";

import style from "./ImageGrid.module.css";
import { useEffect, useRef, useState } from "react";

export default function ImageGrid(props: React.PropsWithChildren<{}>) {
  const $ref = useRef<HTMLDivElement>(null);
  const [isBound, setIsBound] = useState(false);
  useEffect(() => {
    if (!$ref.current) {
      setIsBound(false);
      return;
    }
    if (isBound) return;
    const $images = [
      ...$ref.current.querySelectorAll("img, picture"),
    ] as HTMLElement[];
    yamz.bind($images);
    setIsBound(false);
  }, [$ref.current]);
  return (
    <div ref={$ref} className={style.grid}>
      {props.children}
    </div>
  );
}
