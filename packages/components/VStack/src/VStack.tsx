/** @jsx jsx */
import {jsx} from "@emotion/react";
import {Style, styleToCss} from "@astral-ui/system";
import {forwardRef, PropsWithChildren, Ref, useMemo} from "react";

const baseStyle: Style = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column"
};

export type VStackStyle = Style;
export type VStackProps = PropsWithChildren<{
  styles?: VStackStyle;
  spacing?: string | number;
}>
export const VStack = forwardRef<HTMLDivElement, VStackProps>(function VStack({styles, spacing, ...props}: VStackProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const vStackCss = useMemo(() => styleToCss(
    baseStyle,
    {
      "& > * + *": {
        marginTop: spacing || 0
      }
    },
    styles
  ), [spacing, styles]);

  /** @ts-ignore */
  return <div ref={ref} css={vStackCss} {...props}/>
});
