import {Checkbox, CheckboxProps} from "@astral-ui/checkbox";
import {Label} from "@astral-ui/label";
import {HStack} from "@astral-ui/hstack";
import {VStack} from "@astral-ui/vstack";
import {Text} from "@astral-ui/text";
import {Caption} from "@astral-ui/caption";
import React from "react";

export type CheckboxFieldProps = CheckboxProps & {
  label?: string;
  caption?: string;
};

export function CheckboxField({label, caption, disabled, ...props}: CheckboxFieldProps): JSX.Element {
  const {size} = props;
  return (
    <Label size={size} styles={{
      color: disabled ? "grayscale.60" : "inherit",
      userSelect: "none"
    }}>
      <HStack spacing={size === "large" ? 5 : 2}>
        <Checkbox disabled={disabled} {...props} />
        <VStack>
          <Text size={size}>{label}</Text>
          {caption && <Caption size={size}>{caption}</Caption>}
        </VStack>
      </HStack>
    </Label>
  );
}
