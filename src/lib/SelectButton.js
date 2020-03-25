import React from 'react';

import { Box, RadioButtonGroup } from 'grommet';
import { Ascend, Descend } from 'grommet-icons';

export const SelectButton = ({ value, onChange }) => {
  return (
    <RadioButtonGroup
      name="radio"
      direction="row"
      gap="xsmall"
      options={['asc', 'desc']}
      value={value}
      onChange={onChange}
    >
      {(option, { checked, hover }) => {
        const Icon = option === 'asc' ? Ascend : Descend;
        let background;
        if (checked) background = 'brand';
        else if (hover) background = 'light-4';
        else background = 'light-2';
        return (
          <Box background={background} pad="xsmall">
            <Icon />
          </Box>
        );
      }}
    </RadioButtonGroup>
  );
};
