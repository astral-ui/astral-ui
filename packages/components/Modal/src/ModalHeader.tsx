/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {H500} from "@astral-ui/theme";

const baseStyle = [{
  paddingTop: 4,
  paddingLeft: 6,
  paddingRight: 6,
  paddingBottom: 4
}, H500];

export type ModalHeaderStyle = Style;
export type ModalHeaderProps = Omit<HTMLAttributes<HTMLDivElement>, "styles"> & {
  styles?: ModalHeaderStyle;
};
export const ModalHeader = forwardRef(function ModalHeader({styles, ...props}: ModalHeaderProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const modalHeaderCss = useMemo(() => styleToCss([baseStyle, styles]), [styles])
  return (
    /** @ts-ignore */
    <header ref={ref} css={modalHeaderCss} {...props}/>
  )
});
