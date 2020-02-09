import React from "react";
import { Anchor, Box, Header, Heading, Nav } from "grommet";
import { Avatar } from "../lib/Avatar";

const items = [
  { label: "HTML", href: "#" },
  { label: "JS", href: "#" },
  { label: "REACT", href: "#" }
];

export const AppBarPage = () => (
  <Box pad="large">
    <Heading>AppBar / Toolbar</Heading>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Avatar />
        <Anchor color="white" href="#">
          Montaigne
        </Anchor>
      </Box>
      <Nav direction="row">
        {items.map(item => (
          <Anchor href={item.href} label={item.label} key={item.label} />
        ))}
      </Nav>
    </Header>
  </Box>
);
