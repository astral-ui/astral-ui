import React, {useState} from "react";
import {Page} from "../components/Page/Page";
import {Card} from "../components/Card";
import {Heading} from "@astral-ui/heading";
import {ButtonPageExample} from "./ButtonPageExample";
import ButtonPageExampleCode from "!raw-loader!./ButtonPageExample";
import {TextButton} from "@astral-ui/text-button";
import {HStack} from "@astral-ui/hstack";
import {VStack} from "@astral-ui/vstack";
import {Select} from "@astral-ui/select";
import {ButtonSize, ButtonVariant} from "@astral-ui/button";
import {CheckboxField} from "../components/CheckboxField";
import {Box} from "@astral-ui/box";
import {Caption} from "@astral-ui/caption";

export function ButtonPage(): JSX.Element {
  const [tab, setTab] = useState("example");
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<ButtonSize>("medium");

  return (
    <Page title="Button">

      <Heading size={"subtitle"}>Example</Heading>
      <Card>
        <HStack spacing={4} styles={{padding: 4}}>
          <TextButton onClick={(): void => setTab("example")}>Example</TextButton>
          <TextButton onClick={(): void => setTab("code")}>Code</TextButton>
        </HStack>
        {tab === "example" &&     <VStack spacing={4}>
          <HStack spacing={4} styles={{alignItems: "center"}}>
            <Select value={size} onChange={(ev): void => setSize(ev.target.value as ButtonSize)}>
              <option value="large">Large</option>
              <option value="medium">Medium</option>
              <option value="small">Small</option>
            </Select>
            <CheckboxField checked={disabled} onChange={(ev): void => setDisabled(ev.target.checked)} label={"Disabled"} />
          </HStack>

          <HStack spacing={4} styles={{flexWrap: "wrap"}}>
            {(["primary", "secondary", "tertiary", "destructivePrimary", "destructiveSecondary", "successPrimary", "successSecondary", "contrastPrimary", "contrastSecondary"] as ButtonVariant[]).map(variant =>
              <Box key={variant} styles={{
                padding: 4,
                borderRadius: 1,
                backgroundColor: !["contrastPrimary", "contrastSecondary"].includes(variant) ? "white.100" : "grayscale.100",
                color: !["contrastPrimary", "contrastSecondary"].includes(variant) ? "grayscale.100" : "white.100",
              }}>
                <VStack spacing={"4px"}>
                  <ButtonPageExample disabled={disabled} size={size} variant={variant}>Placeholder</ButtonPageExample>
                  <Caption styles={{color:  !["contrastPrimary", "contrastSecondary"].includes(variant) ? "grayscale.80" : "grayscale.40"}}>size=&quot;{size}&quot;</Caption>
                  <Caption styles={{color:  !["contrastPrimary", "contrastSecondary"].includes(variant) ? "grayscale.80" : "grayscale.40"}}>variant=&quot;{variant}&quot;</Caption>
                  {disabled && <Caption styles={{color:  !["contrastPrimary", "contrastSecondary"].includes(variant) ? "grayscale.80" : "grayscale.40"}}>disabled</Caption>}
                </VStack>
              </Box>
            )}
          </HStack>
        </VStack>}
        {tab === "code" && <pre><code style={{userSelect: "all"}}>
          {ButtonPageExampleCode}
        </code></pre>}
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
            <td><code>&quot;primary&quot; | &quot;secondary&quot; | &quot;tertiary&quot; | &quot;destructivePrimary&quot; | &quot;destructiveSecondary&quot; | &quot;successPrimary&quot; | &quot;successSecondary&quot; | &quot;contrastPrimary&quot; | &quot;contrastSecondary&quot;</code></td>
            <td>The variant of the button</td>
            <td><code>&quot;primary&quot;</code></td>
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


