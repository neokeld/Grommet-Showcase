import React from "react";
import { Anchor, Header, Heading } from "grommet";
import { Github } from "grommet-icons";

const Bar = (props) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

export const AppBar = (props) => (
  <Bar {...props}>
    <Heading level="3" margin="none">Grommet-Showcase</Heading>
    <Anchor
	href="https://github.com/neokeld/Grommet-Showcase"
	icon={<Github size="36px" />}
    />
  </Bar>
);

