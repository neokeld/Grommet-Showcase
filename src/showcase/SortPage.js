import React from 'react';
import { Box, Heading } from 'grommet';

import { Sort } from '../lib/Sort';

const options = ["trappe d'echourgnac", "cabécou", "cathare", "ossau-iraty"];

export const SortPage = () => {
  const [value, setValue] = React.useState(options[0]);
  return (
    <Box pad="large">
      <Heading>Sort</Heading>
      <Sort
        options={options}	  
        value={value}
        onChange={({ option }) => setValue(option)}
      />
    </Box>
  );
};

