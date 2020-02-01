import React from 'react';
import { Button, Box, Heading, Select } from 'grommet';
import { Ascend, Descend } from 'grommet-icons';

const options = ["trappe d'echourgnac", "cabécou", "cathare", "ossau-iraty"];

export const SortPage = () => {

  const [sort, setSort] = React.useState({options});
  const setAsc = () => setSort({options: options.sort(
	  (a, b)=>a.localeCompare(b)
                               ) , direction: "asc"});
  const setDesc = () => setSort({options: options.sort(
	  (a, b)=>b.localeCompare(a)
                               ) , direction: "desc"});

  return (
    <Box pad="large">
      <Heading>Sort</Heading>
      <Box direction='row' justify='start' align='center'
        responsive={false}>
        <Select options={options} />
        <Box direction='row' flex={false} responsive={false} align='center'>
          <Button
            icon={<Ascend
                color={sort.direction === 'asc' ? 'brand' : undefined} />}
            onClick={setAsc} />
          <Button
            icon={<Descend
                color={sort.direction === 'desc' ? 'brand' : undefined} />}
            onClick={setDesc} />
        </Box>
      </Box>
    </Box>
  );
};

