import React from "react";

import { Box, CheckBox, FormField, Heading } from "grommet";

export const ToggleButtonPage = props => (
    <Box fill pad="large">
      <Heading>Togglebutton</Heading>
      <FormField label="Label" htmlFor="check-box" {...props}>
        <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
          <CheckBox id="check-box" label="CheckBox" toggle />
        </Box>
      </FormField>
    </Box>
);
