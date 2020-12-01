/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {H100, H200, H300, H400, H500, H600, H700, H800, H900, Subtitle} from "@astral-ui/theme";

const sizeStyles: {[size: string]: Style} = {
  h1: H900,
  h2: H800,
  h3: H700,
  h4: H600,
  h5: H500,
  h6: H400,
  h7: H300,
  h8: H200,
  h9: H100,
  subtitle: Subtitle
}

export type HeadingStyle = Style;
export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8" | "h9" | "subtitle";
export type HeadingProps = Omit<HTMLAttributes<HTMLHeadingElement>, "size"> & {
  styles?: HeadingStyle;
  size?: HeadingSize;
};
export const Heading = forwardRef(function Heading({size, styles, ...props}: HeadingProps, ref: Ref<HTMLHeadingElement>): JSX.Element {
  const textCss = useMemo(() => styleToCss(sizeStyles[size || "h1"], styles), [size, styles])

  const Component = size;

  /** @ts-ignore */
  return <Component ref={ref} css={textCss} {...props} />;
});
