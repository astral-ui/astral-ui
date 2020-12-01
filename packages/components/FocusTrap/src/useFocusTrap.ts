import {RefObject, useCallback, useEffect} from "react";
import {useFocusOutside} from "./useFocusOutside";

function isHidden(element: HTMLElement): boolean {
  if (element.parentElement && isHidden(element.parentElement)) return true;
  return element.hidden;
}
function isDisabled(element: HTMLElement): boolean {
  return Boolean(element.getAttribute("disabled")) || Boolean(element.getAttribute("aria-disabled"));
}

function isContentEditable(element: HTMLElement): boolean {
  const attribute = element.getAttribute("contentEditable");
  return attribute !== "false" && attribute !== null;
}

function hasTabIndex(element: HTMLElement): boolean {
  const attribute = element.getAttribute("tabIndex");
  if (!attribute) return false;
  return attribute !== "-1";
}

function isFocusable(element: HTMLElement): boolean {
  if (isHidden(element)) return false;
  if (isDisabled(element)) return false;
  if (element.hasAttribute("tabIndex") && element.getAttribute("tabIndex") === "-1") return false;

  const {localName} = element;
  switch (localName) {
    case "input": case "select": case "textarea": case "button": return true;
    case "a": return element.hasAttribute("href");
    case "video": case "audio": return element.hasAttribute("controls");
    default: return isContentEditable(element) || hasTabIndex(element);
  }
}

const focusableElements = [
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]",
].join();

export function useFocusTrap(containerRef: RefObject<HTMLElement>, initialFocusRef?: RefObject<HTMLElement>, finalFocusRef?: RefObject<HTMLElement>): void {
  const resetFocus = useCallback(function resetFocus(): void {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else if (containerRef.current) {
      const focusable = Array.from(containerRef.current.querySelectorAll(focusableElements))
        .filter(element => element instanceof HTMLElement).map(element => element as HTMLElement)
        .filter(isFocusable)
        .filter(element => window.getComputedStyle(element).display !== "none");
      if (focusable.length > 0) {
        (focusable[0] as HTMLElement).focus();
      } else {
        containerRef.current.focus();
      }
    }
  }, [containerRef, initialFocusRef]);

  useFocusOutside(containerRef, resetFocus);
  useEffect(() => {
    resetFocus();
    return (): void => {
      finalFocusRef?.current?.focus();
    }
  }, [resetFocus, finalFocusRef]);
}
