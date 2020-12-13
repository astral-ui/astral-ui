import React, {useState} from "react";
import {Page} from "../components/Page/Page";
import {Caption, CaptionSize} from "@astral-ui/caption";
import {Card, CardBody} from "@astral-ui/card";
import {VStack} from "@astral-ui/vstack";
import {Select} from "@astral-ui/select";
import {HStack} from "@astral-ui/hstack";
import {Heading} from "@astral-ui/heading";

export function CaptionPage(): JSX.Element {
  const [size, setSize] = useState<CaptionSize>("medium");
  return (
    <Page title={"Caption"}>
      <HStack>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as CaptionSize)}>
          <option value="large">Large</option>
          <option value="medium">Medium</option>
          <option value="small">Small</option>
        </Select>
      </HStack>

      <Card>
        <CardBody>
          <VStack>
            <Caption size={size}>Caption</Caption>
            <Caption>size=&quot;{size}&quot;</Caption>
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
