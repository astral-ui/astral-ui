/** @jsx jsx */
import {jsx} from "@emotion/react";
import {forwardRef, Ref, ButtonHTMLAttributes, ElementType, useMemo} from 'react';
import {Style, styleToCss} from "@astral-ui/system";
import {H100, H200, H300} from "@astral-ui/theme";

const baseStyle: Style = {
  verticalAlign: "middle",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  outline: 0,
  cursor: "pointer",
  borderWidth: 0,
  textDecoration: "none",
  backgroundColor: "inherit",
  ":hover": {
    textDecoration: "underline"
  },
  ":focus": {
    textDecoration: "underline"
  },
  ":disabled": {
    textDecoration: "none",
    color: "grayscale.60"
  }
};

const variantStyles: {[variant: string]: Style} = {
  "primary": {
    color: "primary.50",
  },
  "secondary": {
    color: "grayscale.100",
  },
  "destructive": {
    color: "alert.50",
  },
  "success": {
    color: "success.50",
  },
  "contrast": {
    color: "white.100",
    ":disabled": {
      textDecoration: "none",
      color: "white.40"
    }
  }
};

const sizeStyles: {[size: string]: Style} = {
  "large": [{
    height: 3
  }, H300],
  "medium": [{
    height: 2
  }, H200],
  "small": [{
    height: 1
  }, H100]
};

export type TextButtonStyle = Style;
export type TextButtonVariant = "primary" | "secondary" | "destructive" | "success" | "contrast";
export type TextButtonSize = "large" | "medium" | "small";
export type TextButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "styles" | "variant"> & {
  styles?: TextButtonStyle;
  variant?: TextButtonVariant;
  size?: TextButtonSize;
};
export const TextButton = forwardRef(function TextButton<T extends ElementType>({styles, size, variant, ...props}: TextButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element {
  const textButtonCss = useMemo(() => styleToCss(baseStyle, sizeStyles[size || "medium"], variantStyles[variant || "primary"], styles), [size, variant, styles]);
  return (
    /** @ts-ignore */
    <button ref={ref} css={textButtonCss} {...props}/>
  );
});
