import React from "react";
import {Button, ButtonProps} from "@astral-ui/button";

export function ButtonPageExample({disabled, variant, size, children}: ButtonProps): JSX.Element {
  return (
    <Button variant={variant} size={size} disabled={disabled}>{children}</Button>
  )
}
