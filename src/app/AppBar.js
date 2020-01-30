import React from "react";
import { Box, Heading } from "grommet";

const Bar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export const AppBar = (props) => (
  <Bar {...props}>
    <Heading level="3" margin="none">Prime-Grommet</Heading>
  </Bar>
);
