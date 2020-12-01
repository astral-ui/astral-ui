/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, InputHTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";

const baseStyle: Style = {
  width: "100%",
  height: "4px",
  borderRadius: "2px",
  outline: "none",
  "::-webkit-slider-thumb": {
    appearance: "none",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "primary.50",
    cursor: "pointer"
  },
  "::-moz-range-thumb": {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "primary.50",
    cursor: "pointer"
  },
  "::-moz-range-track": {
    height: "4px",
  }
};

export type RangeStyle = Style;
export type RangeProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  styles?: RangeStyle;
};
export const Range = forwardRef(function Range({styles, ...props}: RangeProps, ref: Ref<HTMLInputElement>): JSX.Element {
  const rangeCss = useMemo(() => styleToCss(baseStyle, styles), [styles])

  /** @ts-ignore */
  return <input ref={ref} type="range" css={rangeCss} {...props} />;
});
