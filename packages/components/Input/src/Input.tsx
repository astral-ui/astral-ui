/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, InputHTMLAttributes, Ref, useMemo} from "react";
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

export type InputStyle = Style;
export type InputSize = "small" | "medium" | "large";
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  styles?: InputStyle;
  size?: InputSize;
};
export const Input = forwardRef(function Input({size, styles, ...props}: InputProps, ref: Ref<HTMLInputElement>): JSX.Element {
  const inputCss = useMemo(() => styleToCss(baseStyle, sizeStyles[size || "medium"], styles), [size, styles]);

  /** @ts-ignore */
  return <input ref={ref} css={inputCss} {...props} />
});
