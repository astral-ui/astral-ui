/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, HTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";

const baseStyle: Style = {
  flexGrow: 1
};

export type SpacerStyle = Style;
export type SpacerProps = HTMLAttributes<HTMLDivElement> & {
  styles?: SpacerStyle;
};
export const Spacer = forwardRef(function Spacer({styles, ...props}: SpacerProps, ref: Ref<HTMLDivElement>): JSX.Element {
  const spacerCss = useMemo(() => styleToCss(baseStyle, styles), [styles])

  /** @ts-ignore */
  return <div ref={ref} css={spacerCss} {...props} />;
});
