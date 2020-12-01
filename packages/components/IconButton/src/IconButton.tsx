import React, {forwardRef, Ref, useMemo} from 'react';
import {Style} from "@astral-ui/system";
import {Button, ButtonProps, ButtonStyle} from "@astral-ui/button";

const sizeStyles: {[size: string]: Style} = {
  "large": {
    width: 6,
    height: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4
  },
  "medium": {
    width: 5,
    height: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3
  },
  "small": {
    width: 4,
    height: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2
  }
};

export type IconButtonStyle = ButtonStyle;
export type IconButtonProps = ButtonProps;
export const IconButton = forwardRef(function IconButton({styles, size, ...props}: IconButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element {
  const iconStyles = useMemo(() => [sizeStyles[size || "medium"], styles], [size, styles]);
  return (
    <Button ref={ref} styles={iconStyles} size={size} {...props}/>
  );
});
