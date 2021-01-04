import {useCallback, useState} from "react";

let lastZIndex = 0;

export function useLayer(): {zIndex: number; pushToTop: () => void} {
  const [zIndex, setZIndex] = useState(() => ++ lastZIndex);
  const pushToTop = useCallback(() => {
    setZIndex(++ lastZIndex);
  }, [setZIndex]);
  return {zIndex, pushToTop};
}

