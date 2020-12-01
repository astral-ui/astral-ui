/** @jsx jsx */
import {jsx} from "@emotion/react";
import {ButtonHTMLAttributes, forwardRef, Ref, useMemo} from 'react';
import {Style, styleToCss} from "@astral-ui/system";
import {H100, H200, H300} from "@astral-ui/theme";

const baseStyle: Style = {
  boxSizing: "border-box",
  verticalAlign: "middle",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  outline: 0
};

const variantStyles: {[variant: string]: Style} = {
  "primary": {
    borderWidth: 0,
    backgroundColor: "primary.50",
    color: "white.100",
    ":hover": {
      backgroundColor: "primary.100"
    },
    ":focus": {
      backgroundColor: "primary.100"
    },
    ":disabled": {
      backgroundColor: "grayscale.5",
      color: "grayscale.60"
    }
  },
  "secondary": {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "primary.50",
    backgroundColor: "white.100",
    color: "primary.50",
    ":hover": {
      backgroundColor: "primary.0"
    },
    ":focus": {
      backgroundColor: "primary.0"
    },
    ":disabled": {
      borderColor: "grayscale.40",
      color: "grayscale.60"
    }
  },
  "tertiary": {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "grayscale.40",
    backgroundColor: "white.100",
    color: "grayscale.100",
    ":hover": {
      borderColor: "grayscale.100"
    },
    ":focus": {
      borderColor: "grayscale.100"
    },
    ":disabled": {
      borderColor: "grayscale.40",
      color: "grayscale.60"
    }
  },
  "destructivePrimary": {
    borderWidth: 0,
    backgroundColor: "alert.50",
    color: "white.100",
    ":hover": {
      backgroundColor: "alert.100"
    },
    ":focus": {
      backgroundColor: "alert.100"
    },
    ":disabled": {
      backgroundColor: "grayscale.5",
      color: "grayscale.60"
    }
  },
  "destructiveSecondary": {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "alert.50",
    backgroundColor: "white.100",
    color: "alert.50",
    ":hover": {
      backgroundColor: "alert.5"
    },
    ":focus": {
      backgroundColor: "alert.5"
    },
    ":disabled": {
      borderColor: "grayscale.40",
      color: "grayscale.60"
    }
  },
  "successPrimary": {
    borderWidth: 0,
    backgroundColor: "success.50",
    color: "white.100",
    ":hover": {
      backgroundColor: "success.100"
    },
    ":focus": {
      backgroundColor: "success.100"
    },
    ":disabled": {
      backgroundColor: "grayscale.5",
      color: "grayscale.60"
    }
  },
  "successSecondary": {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "success.50",
    backgroundColor: "white.100",
    color: "success.50",
    ":hover": {
      backgroundColor: "success.5"
    },
    ":focus": {
      backgroundColor: "success.5"
    },
    ":disabled": {
      borderColor: "grayscale.40",
      backgroundColor: "white.100",
      color: "grayscale.60"
    }
  },
  "contrastPrimary": {
    borderWidth: 0,
    backgroundColor: "white.100",
    color: "primary.50",
    ":hover": {
      backgroundColor: "primary.0"
    },
    ":focus": {
      backgroundColor: "primary.0"
    },
    ":disabled": {
      backgroundColor: "white.40",
      color: "white.40"
    }
  },
  "contrastSecondary": {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white.100",
    backgroundColor: "inherit",
    color: "white.100",
    ":hover": {
      backgroundColor: "white.40"
    },
    ":focus": {
      backgroundColor: "white.40"
    },
    ":disabled": {
      backgroundColor: "inherit",
      borderColor: "white.40",
      color: "white.40"
    }
  }
};

const sizeStyles: {[size: string]: Style} = {
  "large": [{
    height: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 1,
  }, H300],
  "medium": [{
    height: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 1
  }, H200],
  "small": [{
    height: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 1
  }, H100]
};

export type ButtonStyle = Style;
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructivePrimary" | "destructiveSecondary" | "successPrimary" | "successSecondary" | "contrastPrimary" | "contrastSecondary";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> & {
  styles?: ButtonStyle;
  variant?: ButtonVariant;
  size?: ButtonSize;
};
export const Button = forwardRef(function Button({styles, size, variant, ...props}: ButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element {
  const buttonCss = useMemo(() => styleToCss(baseStyle, sizeStyles[size || "medium"], variantStyles[variant || "primary"], styles), [size, variant, styles]);
  return (
    /** @ts-ignore */
    <button ref={ref} css={buttonCss} {...props}/>
  );
});
