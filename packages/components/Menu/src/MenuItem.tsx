/** @jsx jsx */
import {jsx} from "@emotion/react";
import {ButtonHTMLAttributes, forwardRef, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {BodyMedium} from "@astral-ui/theme";

const baseStyle: Style = {
  boxSizing: "border-box",
  verticalAlign: "middle",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  cursor: "pointer",
  outline: 0,

  paddingTop: 2,
  paddingBottom: 2,
  paddingRight: 4,
  paddingLeft: 4,
  width: "100%",
  borderWidth: 0,
  borderRadius: 1,
  backgroundColor: "white.100",
  textAlign: "left",
  ...BodyMedium,
  ":hover": {
    backgroundColor: "primary.0"
  },
  ":focus": {
    backgroundColor: "primary.0"
  },
  ":disabled": {
    color: "grayscale.60",
    backgroundColor: "white.100",
    cursor: "default"
  }
};

export type MenuItemStyle = Style;
export type MenuItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  styles?: MenuItemStyle;
};
export const MenuItem = forwardRef(function MenuItem({styles, ...props}: MenuItemProps, ref: Ref<HTMLButtonElement>): JSX.Element {
  const menuItemCss = useMemo(() => styleToCss(baseStyle, styles), [styles]);
  return (
    <button ref={ref} css={menuItemCss} {...props}  />
  );
});
