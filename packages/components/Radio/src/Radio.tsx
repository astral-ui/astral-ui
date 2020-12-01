/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, InputHTMLAttributes, Ref, useMemo} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {BodyLarge, BodyMedium, BodySmall} from "@astral-ui/theme";

const baseStyle: Style = {
  appearance: "none",
  outline: 0,
  backgroundColor: "white.100",
  boxSizing: "border-box",
  borderRadius: "24px",
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "grayscale.40",
  ":hover": {
    backgroundColor: "primary.0",
    borderColor: "primary.50"
  },
  ":focus": {
    backgroundColor: "primary.0",
    borderColor: "primary.50"
  },
  ":checked:after": {
    borderRadius: "24px",
    content: "''",
    padding: "4px",
    backgroundClip: "content-box",
    boxSizing: "border-box",
    backgroundColor: "primary.100",
    position: "absolute",
    top: "-1px",
    left: "-1px",
    textAlign: "center",
    verticalAlign: "middle"
  },
  ":checked:disabled": {
    borderWidth: 1,
    borderColor: "grayscale.40",
    backgroundColor: "grayscale.5"
  },
  ":checked:disabled:after": {
    borderRadius: "24px",
    content: "''",
    padding: "4px",
    backgroundClip: "content-box",
    boxSizing: "border-box",
    backgroundColor: "grayscale.60",
    position: "absolute",
    top: "-1px",
    left: "-1px",
    textAlign: "center",
    verticalAlign: "middle"
  },
  ":disabled": {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "grayscale.40",
    backgroundColor: "grayscale.5"
  }
};

const sizeStyles: {[size: string]: Style} = {
  large: {
    width: 3,
    height: 3,
    ":checked:after": {
      /* @ts-ignore */
      ...baseStyle[":checked:after"],
      ...BodyLarge,
      width: 3,
      height: 3
    }
  },
  medium: {
    width: 2,
    height: 2,
    ":checked:after": {
      /* @ts-ignore */
      ...baseStyle[":checked:after"],
      ...BodyMedium,
      width: 2,
      height: 2
    }
  },
  small: {
    width: 0,
    height: 0,
    marginTop: "2px",
    marginBottom: "2px",
    ":checked:after": {
      /* @ts-ignore */
      ...baseStyle[":checked:after"],
      ...BodySmall,
      fontSize: "8px",
      lineHeight: "12px",
      width: 0,
      height: 0
    }
  }
};

export type RadioStyle = Style;
export type RadioSize = "small" | "medium" | "large";
export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "styles"> & {
  styles?: RadioStyle;
  size?: RadioSize;
};
export const Radio = forwardRef(function Radio({size, styles, ...props}: RadioProps, ref: Ref<HTMLInputElement>): JSX.Element {
  const radioCss = useMemo(() => styleToCss(baseStyle, sizeStyles[size || "medium"], styles), [size, styles])

  /** @ts-ignore */
  return <input ref={ref} type="radio" css={radioCss} {...props} />;
});
