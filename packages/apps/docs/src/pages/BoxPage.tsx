import React from "react";
import {Page} from "../components/Page/Page";
import {Heading} from "@astral-ui/heading";

export function BoxPage(): JSX.Element {
  return (
    <Page title="Box">
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
          <td>&nbsp;</td>
          <td><code>&mdash;</code></td>
        </tr>
        </tbody>
      </table>
    </Page>
  )
}
