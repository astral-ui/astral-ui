import React, {useState} from "react";
import {Page} from "../components/Page/Page";
import {Caption} from "@astral-ui/caption";
import {Card} from "../components/Card";
import {VStack} from "@astral-ui/vstack";
import {Select} from "@astral-ui/select";
import {HStack} from "@astral-ui/hstack";
import {Heading} from "@astral-ui/heading";
import {Text, TextSize} from "@astral-ui/text";

export function TextPage(): JSX.Element {
  const [size, setSize] = useState<TextSize>("medium");
  return (
    <Page title={"Text"}>
      <HStack>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as TextSize)}>
          <option value={"large"}>Large</option>
          <option value={"medium"}>Medium</option>
          <option value={"small"}>Small</option>
        </Select>
      </HStack>

      <Card>
        <VStack>
          <Text size={size}>Text</Text>
          <Caption>size=&quot;{size}&quot;</Caption>
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
          <td>The size of the text</td>
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
