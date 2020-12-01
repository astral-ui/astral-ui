import React, {useState} from "react";
import {VStack} from "@astral-ui/vstack";
import {HStack} from "@astral-ui/hstack";
import {Select, SelectSize} from "@astral-ui/select";
import {CheckboxField} from "../components/CheckboxField";
import {Caption} from "@astral-ui/caption";
import {Page} from "../components/Page/Page";
import {Card} from "../components/Card";
import {Heading} from "@astral-ui/heading";

export function SelectPage(): JSX.Element {
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<SelectSize>("medium");
  return (
    <Page title={"Select"}>
      <HStack spacing={7} styles={{alignItems: "center"}}>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as SelectSize)}>
          <option value={"large"}>Large</option>
          <option value={"medium"}>Medium</option>
          <option value={"small"}>Small</option>
        </Select>
        <CheckboxField checked={disabled} onChange={(ev): void => setDisabled(ev.target.checked)} label={"Disabled"} />
      </HStack>

      <Card>
        <VStack spacing={"4px"}>
          <Select disabled={disabled} size={size}>
            <option/>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
          <Caption>size=&quot;{size}&quot;</Caption>
          {disabled && <Caption>disabled</Caption>}
        </VStack>
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
          <td>The size of the radio button</td>
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
