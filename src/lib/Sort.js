import React from 'react';
import { Button, Box, Select } from 'grommet';
import { Ascend, Descend } from 'grommet-icons';

export const Sort = (props) => {

  const [sort, setSort] = React.useState(props.options);
  const ascCompare = (a, b)=>a.localeCompare(b);
  const descCompare = (a, b)=>b.localeCompare(a);
  const setAsc = () => setSort({options: props.options.sort(
	                                 ascCompare) , direction: "asc"});
  const setDesc = () => setSort({options: props.options.sort(
	                                 descCompare) , direction: "desc"});

  return (
      <Box direction='row' justify='start' align='center'
        responsive={false}>
        <Select {...props} />
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
  );
};

