import React from 'react';
import { Box, Heading, Text } from 'grommet';
import styled from 'styled-components';

import { VerticalDivider } from '../lib/VerticalDivider';

const HorizontalDivider = styled.hr`
  background-color: black;
  height: 4px;
  width: 100%;
  border: 0;
`;

export const DividerPage = () => (
  <Box pad="large" gap="medium">
    <Heading>Divider</Heading>
    <Text>Horizontal:</Text>
    <HorizontalDivider />
    <Text>Vertical:</Text>
    <VerticalDivider height="64px" />
    <Text>Vertical with color:</Text>
    <VerticalDivider height="64px" background={{ color: 'blue' }} />
    <Text>Doted Vertical:</Text>
    <VerticalDivider height="64px" background={{ doted: true }} />
  </Box>
);
