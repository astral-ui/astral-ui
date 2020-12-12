import {Box, BoxStyle} from "@astral-ui/box";
import React, {PropsWithChildren} from "react";

export const baseStyle = {
  backgroundColor: "white.100",
  boxShadow: "md",
  padding: 6,
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
