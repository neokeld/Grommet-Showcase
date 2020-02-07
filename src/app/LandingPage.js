import React from "react";
import { Box, Heading, Paragraph} from "grommet";

export const LandingPage = () => (
  <Box pad="large">
    <Heading>Grommet-Showcase</Heading>
    <Box align="center">
      <Paragraph>This project aims to demonstrate the capabilities of the Grommet component library through small and simple implementations of components from PrimeReact, Semantic UI React and other libraries.</Paragraph>
      <Paragraph>After reviewing this showcase, you should have a good understanding of what Grommet can do and get a feel for how easy it is to use. You can also assess the quality of the api provided by Grommet.</Paragraph>
    </Box>
  </Box>
);
