/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLProps, Ref, useMemo} from "react";
import {SystemStyleObject} from "@styled-system/css";
import {Style, styleToCss} from "@astral-ui/system";
import {useLayer} from "@astral-ui/layer";

const baseStyle: SystemStyleObject = {
  position: "absolute",
  backgroundColor: "white.100",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "grayscale.40",
  borderRadius: 1,
  top: "100%",
  width: "100%",
  boxShadow: "sm"
};

export type MenuContentStyle = Style;
export type MenuContentProps = Omit<HTMLProps<HTMLDivElement>, "styles"> & {
  styles?: MenuContentStyle;
};
export const MenuContent = forwardRef(function MenuContent({styles, ...props}: MenuContentProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const {zIndex} = useLayer();
  const menuContentCss = useMemo(() => styleToCss(baseStyle, styles, {zIndex}), [styles, zIndex]);
  return <div ref={ref} css={menuContentCss} {...props} />
});
