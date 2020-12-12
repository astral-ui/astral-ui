/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";

const baseStyle: Style = {
  position: "relative",
  borderRadius: 1,
  margin: "5vh auto",
  backgroundColor: "white.100",
  boxShadow: "lg",
  width: "80%"
};

export type ModalContentStyle = Style;
export type ModalContentProps = Omit<HTMLAttributes<HTMLDivElement>, "styles"> & {
  styles?: ModalContentStyle;
};
export const ModalContent = forwardRef(function ModalContent({styles, ...props}: ModalContentProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const modalContentCss = useMemo(() => styleToCss([baseStyle, styles]), [styles]);
  return (
    /** @ts-ignore */
    <div ref={ref} css={modalContentCss} onMouseDown={(ev): void => ev.stopPropagation()} {...props} />
  )
});
