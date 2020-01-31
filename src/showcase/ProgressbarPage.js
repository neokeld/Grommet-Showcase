import React from "react";

import { Box, Heading, Meter } from "grommet";

export const ProgressbarPage = () => {
  const value = 30;

  return (
      <Box pad="large">
	<Heading>Progressbar</Heading>
        <Meter type="bar" background="light-2" values={[{ value }]} />
      </Box>
  );
};
