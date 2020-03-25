import React from 'react';

import { Box, Heading, Text } from 'grommet';

import { Panel } from '../lib/Panel';

export const PanelPage = (props) => (
  <Box pad="large">
    <Heading>Panel</Heading>
    <Panel title="Title">
      <Text>
        Panel is a grouping component providing with content toggle feature.
      </Text>
      <Text>Here this is done with a box inside a Collapsible component.</Text>
    </Panel>
  </Box>
);
