import React from "react";
import { Box, Heading, Text } from "grommet";
import styled from "styled-components";

const HorizontalDivider = styled.hr`
  background-color: black;
  height: 4px;
  width: 100%;
  border: 0;
`;

const VerticalDivider = styled.hr`
  background-color: black;
  width: 4px;
  height: 46px;
  border: 0;
`;

export const DividerPage = () => (
  <Box pad="large" gap="medium">
    <Heading>Divider</Heading>
    <Text>Horizontal:</Text>
    <HorizontalDivider />
    <Text>Vertical:</Text>
    <VerticalDivider />
  </Box>
);
