import React, { useState } from 'react';

import { Box, Heading, Text } from 'grommet';

import { SelectButton } from '../lib/SelectButton';

export const SelectButtonPage = () => {
  const [value, setValue] = useState();

  return (
    <Box pad="large">
      <Heading>Selectbutton</Heading>
      <SelectButton
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Text>Select button value: {value}</Text>
    </Box>
  );
};
