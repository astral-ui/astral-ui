/** @jsx jsx */
import {jsx} from "@emotion/react";
import {
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef
} from "react";
import ReactDOM from "react-dom";
import {ModalContextProvider} from "./ModalContext";
import {Style, styleToCss} from "@astral-ui/system";
import {useFocusTrap} from "@astral-ui/focus-trap";

const baseStyle: Style = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  overflow: "auto"
};
export type ModalStyle = Style;
export type ModalProps = Omit<HTMLAttributes<HTMLDivElement>, "initialFocusRef" | "finalFocusRef" | "styles" | "onDismiss"> & {
  initialFocusRef?: RefObject<HTMLElement>;
  finalFocusRef?: RefObject<HTMLElement>;
  styles?: ModalStyle;
  onDismiss?: () => void;
};
export const Modal = forwardRef(function Modal({styles, initialFocusRef, finalFocusRef, onDismiss, ...props}: ModalProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const modalCss = useMemo(() => styleToCss([baseStyle, styles]), [styles])
  const handleKeyDown = useCallback((ev: KeyboardEvent<HTMLElement>) => {
    if (ev.key === "Escape" && onDismiss) {
      ev.stopPropagation();
      onDismiss();
    }
  }, [onDismiss]);
  const handleMouseDown = useCallback((ev: KeyboardEvent<HTMLElement>) => {
    if (onDismiss) {
      ev.preventDefault();
      ev.stopPropagation();
      onDismiss();
    }
  }, [onDismiss]);

  useEffect(() => {
    const prevValue = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = prevValue;
    }
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => {
    return modalRef.current!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }, [modalRef] )

  useEffect((): void => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  useFocusTrap(modalRef, initialFocusRef, finalFocusRef);

  return ReactDOM.createPortal(
    <ModalContextProvider value={{onDismiss}}>
      {/** @ts-ignore */}
      <div ref={modalRef} css={modalCss} onKeyDown={handleKeyDown} onMouseDown={handleMouseDown} role="dialog" aria-modal {...props} />
    </ModalContextProvider>, document.body);
});

