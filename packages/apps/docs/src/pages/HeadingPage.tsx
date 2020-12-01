import React, {useState} from "react";
import {Page} from "../components/Page/Page";
import {Caption} from "@astral-ui/caption";
import {Card} from "../components/Card";
import {VStack} from "@astral-ui/vstack";
import {Select} from "@astral-ui/select";
import {HStack} from "@astral-ui/hstack";
import {Heading, HeadingSize} from "@astral-ui/heading";

export function HeadingPage(): JSX.Element {
  const [size, setSize] = useState<HeadingSize>("h6");
  return (
    <Page title={"Heading"}>
      <HStack>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as HeadingSize)}>
          <option value={"h1"}>h1</option>
          <option value={"h2"}>h2</option>
          <option value={"h3"}>h3</option>
          <option value={"h4"}>h4</option>
          <option value={"h5"}>h5</option>
          <option value={"h6"}>h6</option>
          <option value={"h7"}>h7</option>
          <option value={"h8"}>h8</option>
          <option value={"h9"}>h9</option>
          <option value={"subtitle"}>subtitle</option>
        </Select>
      </HStack>

      <Card>
        <VStack>
          <Heading size={size}>Heading</Heading>
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
          <td><code>&quot;h1&quot; | &quot;h2&quot; | &quot;h3&quot; | &quot;h4&quot; | &quot;h5&quot; | &quot;h6&quot; | &quot;h7&quot; | &quot;h8&quot; | &quot;h9&quot; | &quot;subtitle&quot;</code></td>
          <td>The size of the heading</td>
          <td><code>&quot;h1&quot;</code></td>
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
  )
}
