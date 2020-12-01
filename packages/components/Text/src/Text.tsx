/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {BodyLarge, BodyMedium, BodySmall} from "@astral-ui/theme";

const sizeStyles: {[size: string]: Style} = {
  large: BodyLarge,
  medium: BodyMedium,
  small: BodySmall
}

export type TextStyle = Style;
export type TextSize = "small" | "medium" | "large";
export type TextProps = Omit<HTMLAttributes<HTMLSpanElement>, "size" | "styles"> & {
  styles?: TextStyle;
  size?: TextSize;
};
export const Text = forwardRef(function Text({size, styles, ...props}: TextProps, ref: Ref<HTMLSpanElement>): JSX.Element {
  const textCss = useMemo(() => styleToCss(sizeStyles[size || "medium"], styles), [size, styles])

  /** @ts-ignore */
  return <span ref={ref} css={textCss} {...props} />;
});
