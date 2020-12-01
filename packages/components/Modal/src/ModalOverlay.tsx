/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {useModalContext} from "./ModalContext";
import {Style, styleToCss} from "@astral-ui/system";

const baseStyle: Style = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)"
};

export type ModalOverlayStyle = Style;
export type ModalOverlayProps = Omit<HTMLAttributes<HTMLDivElement>, "styles"> & {
  styles?: ModalOverlayStyle;
};
export const ModalOverlay = forwardRef(function ModalOverlay({styles, ...props}: ModalOverlayProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const {onDismiss} = useModalContext();
  const modalStyles = useMemo(() => styleToCss([baseStyle, styles]), [styles])

  /** @ts-ignore */
  return (<div ref={ref} css={modalStyles} onMouseDown={(): void => {
    if (onDismiss) {
      onDismiss();
    }
  }} {...props} />);
});
