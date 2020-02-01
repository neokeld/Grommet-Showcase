import React, { useState } from "react";

import { Box, Heading, Select } from "grommet";

export const DropdownPage = (props) => {
  const options = ["one", "two"];
  const [value, setValue] = useState("");

  const onChange = ({ option }) => setValue(option);

  return (
      <Box pad="large">
	<Heading>Dropdown</Heading>
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={onChange}
          {...props}
        />
      </Box>
  );
};

