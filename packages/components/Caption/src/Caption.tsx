/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {BodyMedium, BodySmall} from "@astral-ui/theme";

const baseStyle: Style = {
  color: "grayscale.80"
};

const sizeStyles: {[size: string]: Style} = {
  large: BodyMedium,
  medium: BodySmall,
  small: BodySmall
};

export type CaptionStyle = Style;
export type CaptionSize = "small" | "medium" | "large";
export type CaptionProps = Omit<HTMLAttributes<HTMLSpanElement>, "size"> & {
  styles?: CaptionStyle;
  size?: CaptionSize;
};
export const Caption = forwardRef(function Caption({size, styles, ...props}: CaptionProps, ref: Ref<HTMLSpanElement>): JSX.Element {
  const captionCss = useMemo(() => styleToCss(baseStyle, sizeStyles[size || "medium"], styles), [size, styles])

  /** @ts-ignore */
  return <span ref={ref} css={captionCss} {...props} />;
});
