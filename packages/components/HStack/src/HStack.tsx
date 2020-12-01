/** @jsx jsx */
import {jsx} from "@emotion/react";
import {Style, styleToCss} from "@astral-ui/system";
import {forwardRef, PropsWithChildren, Ref, useMemo} from "react";

const baseStyle: Style = {
  boxSizing: "border-box",
  display: "flex"
};

export type HStackStyle = Style;
export type HStackProps = PropsWithChildren<{
  styles?: HStackStyle;
  spacing?: string | number;
}>;
export const HStack = forwardRef<HTMLDivElement, HStackProps>(function HStack({styles, spacing, ...props}: HStackProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const hStackCss = useMemo(() =>styleToCss(
    baseStyle,
    {
      "& > * + *": {
        marginLeft: spacing || 0
      }
    },
    styles
  ), [spacing, styles]);

  /** @ts-ignore */
  return <div ref={ref} css={hStackCss} {...props}/>
});
