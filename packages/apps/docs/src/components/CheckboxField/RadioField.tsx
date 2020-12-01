import {CheckboxFieldProps} from "./CheckboxField";
import {Label} from "@astral-ui/label";
import {HStack} from "@astral-ui/hstack";
import {Radio} from "@astral-ui/radio";
import {VStack} from "@astral-ui/vstack";
import {Text} from "@astral-ui/text";
import {Caption} from "@astral-ui/caption";
import React from "react";

export function RadioField({label, caption, disabled, ...props}: CheckboxFieldProps): JSX.Element {
  const {size} = props;
  return (
    <Label size={size} styles={{
      color: disabled ? "grayscale.60" : "inherit",
      userSelect: "none"
    }}>
      <HStack spacing={size === "large" ? 5 : 2}>
        <Radio radioGroup={"test"} disabled={disabled} {...props} />
        <VStack>
          <Text size={size}>{label}</Text>
          {caption && <Caption size={size}>{caption}</Caption>}
        </VStack>
      </HStack>
    </Label>
  );
}
