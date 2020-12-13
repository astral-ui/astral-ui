import {Box, BoxStyle} from "@astral-ui/box";
import React, {PropsWithChildren} from "react";

const baseStyle = {
  backgroundColor: "white.100",
  boxShadow: "sm",
  borderRadius: 1
};

export type CardStyle = BoxStyle;
export type CardProps = PropsWithChildren<{
  styles?: CardStyle;
}>;
export function Card({styles, children}: CardProps): JSX.Element {
  return (
    <Box styles={[baseStyle, styles]}>
      {children}
    </Box>
  );
}
