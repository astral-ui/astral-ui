import React, {useState} from "react";
import {HStack} from "@astral-ui/hstack";
import {CheckboxField} from "../components/CheckboxField";
import {Range} from "@astral-ui/range";
import {Page} from "../components/Page/Page";
import {Card} from "../components/Card";
import {Heading} from "@astral-ui/heading";

export function RangePage(): JSX.Element {
  const [disabled, setDisabled] = useState(false);
  return (
    <Page title="Range">
      <HStack spacing={7} styles={{alignItems: "center"}}>
        <CheckboxField checked={disabled} onChange={(ev): void => setDisabled(ev.target.checked)} label={"Disabled"} />
      </HStack>
      <Card>
        <Range disabled={disabled} min={0} max={10} defaultValue={3} />
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
          <td><code>styles</code></td>
          <td>CSS Properties</td>
          <td></td>
          <td><code>&mdash;</code></td>
        </tr>
        </tbody>
      </table>
    </Page>
  );
}
