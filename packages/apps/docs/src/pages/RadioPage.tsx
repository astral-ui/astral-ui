import React, {useState} from "react";
import {CheckboxSize} from "@astral-ui/checkbox";
import {HStack} from "@astral-ui/hstack";
import {Select} from "@astral-ui/select";
import {CheckboxField} from "../components/CheckboxField";
import {Page} from "../components/Page/Page";
import {Card, CardBody} from "@astral-ui/card";
import {Heading} from "@astral-ui/heading";
import {Radio} from "@astral-ui/radio";
import {Caption} from "@astral-ui/caption";
import {VStack} from "@astral-ui/vstack";

export function RadioPage(): JSX.Element {
  const [size, setSize] = useState<CheckboxSize>("medium")
  const [disabled, setDisabled] = useState(false);
  return (
    <Page title="Radio">
      <HStack spacing={7} styles={{alignItems: "center"}}>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as CheckboxSize)}>
          <option value={"large"}>Large</option>
          <option value={"medium"}>Medium</option>
          <option value={"small"}>Small</option>
        </Select>
        <CheckboxField checked={disabled} onChange={(ev): void => setDisabled(ev.target.checked)} label={"Disabled"} />
      </HStack>
      <Card>
        <CardBody>
          <form>
            <VStack>
              <HStack spacing={4}>
                <Radio name={"radio"} size={size} disabled={disabled} defaultChecked />
                <Radio name={"radio"} size={size} disabled={disabled} />
              </HStack>
              <Caption>size=&quot;{size}&quot;</Caption>
              {disabled && <Caption>disabled</Caption>}
            </VStack>
          </form>
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
          <td>The size of the radio button</td>
          <td><code>&quot;medium&quot;</code></td>
        </tr>
        <tr>
          <td><code>styles</code></td>
          <td>CSS Properties</td>
          <td>&nbsp;</td>
          <td><code>&mdash;</code></td>
        </tr>
        </tbody>
      </table>
    </Page>
  );
}
