/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, Ref, SelectHTMLAttributes, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {BodyLarge, BodyMedium, BodySmall} from "@astral-ui/theme";

const baseStyle: Style = {
  boxSizing: "border-box",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "grayscale.40",
  borderRadius: 1,
  outline: 0,
  ":focus": {
    borderColor: "primary.50",
  },
  ":disabled": {
    borderColor: "grayscale.40",
    backgroundColor: "grayscale.5",
    color: "grayscale.60"
  },
  "::placeholder": {
    color: "primary.80"
  }
};

const sizeStyles: {[size: string]: Style} = {
  large: {
    height: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    ...BodyLarge
  },
  medium: {
    height: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    ...BodyMedium
  },
  small: {
    height: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    ...BodySmall
  }
};

export type SelectStyle = Style;
export type SelectSize = "small" | "medium" | "large";
export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "styles"> & {
  styles?: SelectStyle;
  size?: SelectSize;
};
export const Select = forwardRef(function Select({size, styles, ...props}: SelectProps, ref: Ref<HTMLSelectElement>): JSX.Element {
  const selectCss = useMemo(() => styleToCss(baseStyle, sizeStyles[size || "medium"], styles), [size, styles])

  /** @ts-ignore */
  return <select ref={ref} type={"checkbox"} css={selectCss} {...props} />;
});
