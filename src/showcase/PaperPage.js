import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";

export const PaperPage = () => (
  <Box pad="large" gap="medium">
    <Heading>Paper</Heading>
    <Box direction="row" gap="medium">
      <Box pad="medium" elevation="small" round="small">
        <Text>Paper with small elevation</Text>
      </Box>
      <Box pad="medium" elevation="medium" round="small">
        <Text>Paper with medium elevation</Text>
      </Box>
      <Box pad="medium" elevation="large" round="small">
        <Text>Paper with large elevation</Text>
      </Box>
    </Box>
    <Box direction="row" gap="medium">
      <Box pad="medium" elevation="small">
        <Text>Square with small elevation</Text>
      </Box>
      <Box pad="medium" elevation="medium">
        <Text>Square with medium elevation</Text>
      </Box>
      <Box pad="medium" elevation="large">
        <Text>Square with large elevation</Text>
      </Box>
    </Box>
    <Heading>Container</Heading>
    <Box align="center">
      <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</Paragraph>
    </Box>
  </Box>
);

