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
  const color = (direction) => sort.direction === direction ? 'brand' : undefined; 

  return (
      <Box direction='row' justify='start' align='center'
        responsive={false}>
        <Select {...props} />
        <Box direction='row' flex={false} responsive={false} align='center'>
          <Button
            icon={<Ascend
                color={color('asc')} />}
            onClick={setAsc} />
          <Button
            icon={<Descend
                color={color('desc')} />}
            onClick={setDesc} />
        </Box>
      </Box>
  );
};

