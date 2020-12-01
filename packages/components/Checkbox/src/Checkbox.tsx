/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, InputHTMLAttributes, Ref, useEffect, useImperativeHandle, useMemo, useRef} from "react";
import {Style, styleToCss} from "@astral-ui/system";
import {BodyLarge, BodyMedium, BodySmall} from "@astral-ui/theme";

const baseStyle: Style = {
  appearance: "none",
  outline: 0,
  backgroundColor: "white.100",
  boxSizing: "border-box",
  borderRadius: 1,
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
  ":checked": {
    borderWidth: 0,
    backgroundColor: "primary.50"
  },
  ":checked:focus": {
    backgroundColor: "primary.100"
  },
  ":checked:hover": {
    backgroundColor: "primary.100"
  },
  ":checked:after": {
    content: "'\\2714'",
    position: "absolute",
    color: "white.100",
    top: "0",
    left: "0",
    textAlign: "center",
    verticalAlign: "middle"
  },
  ":checked:disabled": {
    borderWidth: 0,
    backgroundColor: "grayscale.60"
  },
  ":indeterminate": {
    borderWidth: 0,
    backgroundColor: "primary.50"
  },
  ":indeterminate:focus": {
    backgroundColor: "primary.100"
  },
  ":indeterminate:hover": {
    backgroundColor: "primary.100"
  },
  ":indeterminate:after": {
    content: "'\\2012'",
    position: "absolute",
    color: "white.100",
    top: "0",
    left: "0",
    textAlign: "center",
    verticalAlign: "middle"
  },
  ":indeterminate:disabled": {
    borderWidth: 0,
    backgroundColor: "grayscale.60"
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
    },
    ":indeterminate:after": {
      /* @ts-ignore */
      ...baseStyle[":indeterminate:after"],
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
    },
    ":indeterminate:after": {
      /* @ts-ignore */
      ...baseStyle[":indeterminate:after"],
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
    },
    ":indeterminate:after": {
      /* @ts-ignore */
      ...baseStyle[":indeterminate:after"],
      ...BodySmall,
      fontSize: "8px",
      lineHeight: "12px",
      width: 0,
      height: 0
    }
  }
};

export type CheckboxStyle = Style;
export type CheckboxSize = "small" | "medium" | "large";
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  styles?: CheckboxStyle;
  size?: CheckboxSize;
  indeterminate?: boolean;
};
export const Checkbox = forwardRef(function Checkbox({size, styles, indeterminate, ...props}: CheckboxProps, ref: Ref<HTMLInputElement>): JSX.Element {
  const checkboxCss = useMemo(() => styleToCss(baseStyle, sizeStyles[size || "medium"], styles), [size, styles])
  const checkboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate === true
    }
  }, [checkboxRef, indeterminate]);

  useImperativeHandle(ref,() => {
    return checkboxRef.current!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }, [checkboxRef]);

  /** @ts-ignore */
  return <input ref={checkboxRef} type={"checkbox"} css={checkboxCss} {...props} />;
});
