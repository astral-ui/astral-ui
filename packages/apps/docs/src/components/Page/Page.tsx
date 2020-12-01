import {VStack, VStackStyle} from "@astral-ui/vstack";
import {Heading, HeadingStyle} from "@astral-ui/heading";
import React, {PropsWithChildren} from "react";
import {Card} from "../Card";

export type PageStyle = {
  root: VStackStyle;
  heading: HeadingStyle;
};
export type PageProps = PropsWithChildren<{
  styles?: PageStyle;
  title: string;
}>
export function Page({title, styles, children}: PageProps): JSX.Element {
  return (
    <Card>
      <VStack spacing={6} styles={styles?.root}>
        <Heading size={"h5"} styles={styles?.heading}>{title}</Heading>
        {children}
      </VStack>
    </Card>
  )
}
