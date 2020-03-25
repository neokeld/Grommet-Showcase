import React from 'react';
import { Anchor, Box, Header, Heading, Image } from 'grommet';
import { Github } from 'grommet-icons';

const Logo = ({ size }) => (
  <Box height={size} width="xsmall">
    <Image fit="contain" src="https://blog.dema.in/i/logo.svg" />
  </Box>
);

const Bar = (props) => (
  <Header
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    {...props}
  />
);

export const AppBar = (props) => (
  <Bar {...props}>
    <Heading level="3" margin="none">
      Grommet-Showcase
    </Heading>
    <Box direction="row">
      <Anchor href="https://blog.dema.in" icon={<Logo size="36px" />} />
      <Anchor
        href="https://github.com/neokeld/Grommet-Showcase"
        icon={<Github size="36px" />}
        color="light-1"
      />
    </Box>
  </Bar>
);
