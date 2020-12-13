import React, {useState} from "react";
import {VStack} from "@astral-ui/vstack";
import {Heading} from "@astral-ui/heading";
import {HStack} from "@astral-ui/hstack";
import {Select} from "@astral-ui/select";
import {CheckboxField} from "../components/CheckboxField";
import {Input, InputSize} from "@astral-ui/input";
import {Caption} from "@astral-ui/caption";
import {Page} from "../components/Page/Page";
import {Card, CardBody} from "@astral-ui/card";

export function InputPage(): JSX.Element {
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<InputSize>("medium");
  return (
    <Page title={"Input"}>
      <HStack spacing={7} styles={{alignItems: "center"}}>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as InputSize)}>
          <option value={"large"}>Large</option>
          <option value={"medium"}>Medium</option>
          <option value={"small"}>Small</option>
        </Select>
        <CheckboxField checked={disabled} onChange={(ev): void => setDisabled(ev.target.checked)} label={"Disabled"} />
      </HStack>

      <Card>
        <CardBody>
          <VStack spacing={"4px"}>
            <Input disabled={disabled} size={size} placeholder={"Placeholder"} />
            <Caption>size=&quot;{size}&quot;</Caption>
            {disabled && <Caption>disabled</Caption>}
          </VStack>
        </CardBody>
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
          <td><code>styles</code></td>
          <td>CSS Properties</td>
          <td></td>
          <td><code>&mdash;</code></td>
        </tr>
        </tbody>
      </table>
    </Page>
  )
}
