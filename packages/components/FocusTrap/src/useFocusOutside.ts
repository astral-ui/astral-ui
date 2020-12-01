import {RefObject, useEffect} from "react";

export function useFocusOutside(containerRef: RefObject<HTMLElement>, callback?: () => void): void {
  useEffect(() => {
    const handleFocusIn = (ev: FocusEvent): void => {
      if (!containerRef.current) return;
      if (!ev.target) return;
      if (!containerRef.current.contains(ev.target as Node)) {
        if (callback) callback();
      }
    };

    window.addEventListener("focusin", handleFocusIn);
    return (): void => {
      window.removeEventListener("focusin", handleFocusIn);
    };
  }, [containerRef, callback]);
}
