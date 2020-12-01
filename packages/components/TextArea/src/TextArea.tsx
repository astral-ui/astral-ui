/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, Ref, TextareaHTMLAttributes, useMemo} from "react";
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
  },
  "::-webkit-scrollbar": {
    borderRadius: 1,
    backgroundColor: "grayscale.5",
    width: 1
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "grayscale.40",
    borderRadius: 1
  },
  "::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "grayscale.80"
  }
};

const sizeStyles: {[size: string]: Style} = {
  large: {
    minHeight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    ...BodyLarge
  },
  medium: {
    minHeight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    ...BodyMedium
  },
  small: {
    minHeight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    ...BodySmall
  }
};

export type TextAreaStyle = Style;
export type TextAreaSize = "small" | "medium" | "large";
export type TextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "styles"> & {
  styles?: TextAreaStyle;
  size?: TextAreaSize;
};
export const TextArea = forwardRef(function TextArea({size, styles, ...props}: TextAreaProps, ref: Ref<HTMLTextAreaElement>): JSX.Element {
  const textAreaCss = useMemo(() => styleToCss(baseStyle, sizeStyles[size || "large"], styles), [size, styles]);

  /** @ts-ignore */
  return <textarea ref={ref} css={textAreaCss} {...props} />
});
TextArea.defaultProps = {
  rows: 3
}
