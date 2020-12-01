/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, LabelHTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {H100, H200, H300} from "@astral-ui/theme";

const sizeStyles: {[size: string]: Style} = {
  large: H300,
  medium: H200,
  small: H100
}

export type LabelStyle = Style;
export type LabelSize = "small" | "medium" | "large";
export type LabelProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, "size"> & {
  styles?: LabelStyle;
  size?: LabelSize;
};
export const Label = forwardRef(function Label({size, styles, ...props}: LabelProps, ref: Ref<HTMLLabelElement>): JSX.Element {
  const labelCss = useMemo(() => styleToCss(sizeStyles[size || "medium"], styles), [size, styles]);

  /** @ts-ignore */
  return <label ref={ref} css={labelCss} {...props} />;
});
