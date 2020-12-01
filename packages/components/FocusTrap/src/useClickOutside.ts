import {RefObject, useEffect} from "react";

export function useClickOutside(containerRef: RefObject<HTMLElement>, callback?: () => void): void {
  useEffect(() => {
    const handleClick = (ev: MouseEvent): void => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(ev.target as Node)) {
        if (callback) callback();
      }
    };

    window.addEventListener("click", handleClick);
    return (): void => {
      window.removeEventListener("click", handleClick);
    };
  }, [containerRef, callback]);
}
