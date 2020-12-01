import React, {useState} from "react";
import {ButtonSize, ButtonVariant} from "@astral-ui/button";
import {HStack} from "@astral-ui/hstack";
import {Select} from "@astral-ui/select";
import {TextAreaSize} from "@astral-ui/textarea";
import {Box} from "@astral-ui/box";
import {IconButton} from "@astral-ui/icon-button";
import {FaCheck} from "react-icons/all";
import {CheckboxField} from "../components/CheckboxField";
import {Page} from "../components/Page/Page";
import {VStack} from "@astral-ui/vstack";
import {Caption} from "@astral-ui/caption";
import {Card} from "../components/Card";
import {Heading} from "@astral-ui/heading";

export function IconButtonPage(): JSX.Element {
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<ButtonSize>("medium");

  return (
    <Page title="Icon Button">
      <HStack spacing={7} styles={{alignItems: "center"}}>
        <Select value={size} onChange={(ev): void => setSize(ev.target.value as TextAreaSize)}>
          <option value={"large"}>Large</option>
          <option value={"medium"}>Medium</option>
          <option value={"small"}>Small</option>
        </Select>
        <CheckboxField checked={disabled} onChange={(ev): void => setDisabled(ev.target.checked)} label={"Disabled"} />
      </HStack>

      <Card>
        <HStack spacing={"8px"} styles={{flexWrap: "wrap"}}>
          {(["primary", "secondary", "tertiary", "destructivePrimary", "destructiveSecondary", "successPrimary", "successSecondary", "contrastPrimary", "contrastSecondary"] as ButtonVariant[]).map(variant =>
            <Box key={variant} styles={{
              padding: 4,
              borderRadius: 1,
              backgroundColor: !["contrastPrimary", "contrastSecondary"].includes(variant) ? "white.100" : "grayscale.100",
              color: !["contrastPrimary", "contrastSecondary"].includes(variant) ? "grayscale.100" : "white.100",
            }}>
              <VStack>
                <IconButton disabled={disabled} size={size} variant={variant}>
                  <FaCheck />
                </IconButton>
                <Caption styles={{color:  !["contrastPrimary", "contrastSecondary"].includes(variant) ? "grayscale.80" : "grayscale.40"}}>size=&quot;{size}&quot;</Caption>
                <Caption styles={{color:  !["contrastPrimary", "contrastSecondary"].includes(variant) ? "grayscale.80" : "grayscale.40"}}>variant=&quot;{variant}&quot;</Caption>
                {disabled && <Caption styles={{color:  !["contrastPrimary", "contrastSecondary"].includes(variant) ? "grayscale.80" : "grayscale.40"}}>disabled</Caption>}
              </VStack>
            </Box>
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


