import React, {useState} from "react";
import {TextButton, TextButtonSize, TextButtonVariant} from "@astral-ui/text-button";
import {HStack} from "@astral-ui/hstack";
import {Select} from "@astral-ui/select";
import {CheckboxField} from "../components/CheckboxField";
import {Page} from "../components/Page/Page";
import {Card} from "../components/Card";
import {VStack} from "@astral-ui/vstack";
import {Caption} from "@astral-ui/caption";
import {Heading} from "@astral-ui/heading";

export function TextButtonPage(): JSX.Element {
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<TextButtonSize>("medium");
  return (
    <Page title={"Text Button"}>
      <HStack spacing={7} styles={{alignItems: "center"}}>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as TextButtonSize)}>
          <option value={"large"}>Large</option>
          <option value={"medium"}>Medium</option>
          <option value={"small"}>Small</option>
        </Select>
        <CheckboxField checked={disabled} onChange={(ev): void => setDisabled(ev.target.checked)} label={"Disabled"} />
      </HStack>

      <Card>
        <HStack>
          {(["primary", "secondary", "destructive", "success", "contrast"] as TextButtonVariant[]).map(variant =>
            <VStack key={variant} spacing={"4px"} styles={{
              padding: 4,
              borderRadius: 1,
              backgroundColor: "contrast" !== variant ? "white.100" : "grayscale.100",
              color: "contrast" !== variant ? "grayscale.100" : "white.100"
            }}>
              <TextButton disabled={disabled} size={size} variant={variant}>Placeholder</TextButton>
              <Caption styles={{color: "contrast" !== variant ? "grayscale.80" : "grayscale.40"}}>size={size}</Caption>
              <Caption styles={{color: "contrast" !== variant ? "grayscale.80" : "grayscale.40"}}>variant={variant}</Caption>
              {disabled && <Caption styles={{color: "contrast" !== variant ? "grayscale.80" : "grayscale.40"}}>disabled</Caption>}
            </VStack>
          )}
        </HStack>
      </Card>


      <Heading size={"subtitle"}>Properties</Heading>
      <table style={{width: "100%"}}>
        <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><code>size</code></td>
          <td><code>&quot;small&quot; | &quot;medium&quot; | &quot;large&quot;</code></td>
          <td>The size of the button</td>
          <td><code>&quot;medium&quot;</code></td>
        </tr>
        <tr>
          <td><code>variant</code></td>
          <td><code>&quot;primary&quot; | &quot;secondary&quot; | &quot;destructive&quot; | &quot;success&quot; | &quot;contrast&quot;</code></td>
          <td>The variant of the button</td>
          <td><code>&quot;primary&quot;</code></td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>true | false</code></td>
          <td></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>styles</code></td>
          <td>CSS Properties</td>
          <td>The size of the button</td>
          <td><code>&mdash;</code></td>
        </tr>
        </tbody>
      </table>
    </Page>
  );
}
