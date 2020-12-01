import {useModalContext} from "./ModalContext";
import {TextButton, TextButtonProps, TextButtonStyle} from "@astral-ui/text-button";
import React, {Ref} from "react";

const baseStyle = {
  position: "absolute",
  top: "8px",
  right: "24px"
};
export type ModalCloseButtonStyle = TextButtonStyle;
export type ModalCloseButtonProps = TextButtonProps;
export const ModalCloseButton = React.forwardRef(function ModalCloseButton({styles, ...props}: ModalCloseButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element {
  const {onDismiss} = useModalContext();
  return (
    <TextButton ref={ref} styles={[baseStyle, styles]} type="button" variant="secondary" size="large" onClick={onDismiss} tabIndex={-1} {...props}>
      &#10006;
    </TextButton>
  )
});
