import React, {useState} from "react";
import {Checkbox, CheckboxSize} from "@astral-ui/checkbox";
import {HStack} from "@astral-ui/hstack";
import {Select} from "@astral-ui/select";
import {CheckboxField} from "../components/CheckboxField";
import {Page} from "../components/Page/Page";
import {Card} from "../components/Card";
import {Heading} from "@astral-ui/heading";
import {VStack} from "@astral-ui/vstack";
import {Caption} from "@astral-ui/caption";

export function CheckboxPage(): JSX.Element {
  const [size, setSize] = useState<CheckboxSize>("medium")
  const [disabled, setDisabled] = useState(false);
  return (
    <Page title="Checkbox">
      <HStack spacing={7} styles={{alignItems: "center"}}>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as CheckboxSize)}>
          <option value={"large"}>Large</option>
          <option value={"medium"}>Medium</option>
          <option value={"small"}>Small</option>
        </Select>
        <CheckboxField checked={disabled} onChange={(ev): void => setDisabled(ev.target.checked)} label={"Disabled"} />
      </HStack>
      <Card>
        <VStack spacing={"4px"} styles={{width: "100%"}}>
          <HStack spacing={4} styles={{width: "100%"}}>
            <Checkbox size={size} disabled={disabled} defaultChecked />
            <Checkbox size={size} disabled={disabled} indeterminate />
            <Checkbox size={size} disabled={disabled} />
          </HStack>
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
          <td>The size of the button</td>
          <td><code>&quot;medium&quot;</code></td>
        </tr>
        <tr>
          <td><code>indeterminate</code></td>
          <td><code>true | false</code></td>
          <td>Checkbox is indeterminate</td>
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
