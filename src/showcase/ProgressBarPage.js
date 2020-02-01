import React from "react";

import { Box, Heading, Meter } from "grommet";

export const ProgressBarPage = () => {
  const value = 30;

  return (
      <Box pad="large">
	<Heading>Progressbar / LinearProgress</Heading>
        <Meter type="bar" background="light-2" values={[{ value }]} />
      </Box>
  );
};
