/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLProps, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";

const baseStyle: Style = {
  backgroundColor: "grayscale.40",
  height: "1px",
  marginTop: "7px",
  marginBottom: "9px"
};

export type MenuDividerStyle = Style;
export type MenuDividerProps = Omit<HTMLProps<HTMLDivElement>, "children"> & {
  styles?: MenuDividerStyle;
};
export const MenuDivider = forwardRef(function MenuDivider({styles, ...props}: MenuDividerProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const menuItemCss = useMemo(() => styleToCss(baseStyle, styles), [styles]);
  return (
    <div ref={ref} css={menuItemCss} {...props}  />
  );
});

