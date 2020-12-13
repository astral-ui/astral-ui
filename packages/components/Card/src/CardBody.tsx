/** @jsx jsx */
import {jsx} from "@emotion/react";
import {PropsWithChildren, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";

const baseStyle = {
  padding: 6
};

export type CardBodyStyle = Style;
export type CardBodyProps = PropsWithChildren<{
  styles?: CardBodyStyle;
}>;
export function CardBody({styles, children}: CardBodyProps): JSX.Element {
  const css = useMemo(() => styleToCss([baseStyle, styles]), [styles]);
  return (
    /** @ts-ignore */
    <div css={css}>
      {children}
    </div>
  );
}
