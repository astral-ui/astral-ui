/** @jsx jsx */
import {jsx} from "@emotion/react";
import {ElementType, forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";

export type BoxStyle = Style;
export type BoxProps = Omit<HTMLAttributes<HTMLDivElement>, "styles"> & {
  styles?: BoxStyle;
};
export const Box = forwardRef(function Box<T extends ElementType>({styles, ...props}: BoxProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const boxCss = useMemo(() => styleToCss(styles), [styles]);

  /** @ts-ignore */
  return <div ref={ref} css={boxCss} {...props} />;
});

