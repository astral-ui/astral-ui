/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";

const baseStyle = {
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 6,
  paddingRight: 6
};

export type ModalFooterStyle = Style;
export type ModalFooterProps = Omit<HTMLAttributes<HTMLElement>, "styles"> & {
  styles?: ModalFooterStyle;
};
export const ModalFooter = forwardRef(function ModalFooter({styles, ...props}: ModalFooterProps, ref: Ref<HTMLElement>): JSX.Element {
  const modalFooterCss = useMemo(() => styleToCss([baseStyle, styles]), [styles]);
  return (
    /** @ts-ignore */
    <footer ref={ref} css={modalFooterCss} {...props}/>
  )
});
