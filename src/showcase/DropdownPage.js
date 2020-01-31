import React, { useState } from "react";

import { Box, Select } from "grommet";

export const DropdownPage = (props) => {
  const options = ["one", "two"];
  const [value, setValue] = useState("");

  const onChange = ({ option }) => setValue(option);

  return (
      <Box fill pad="large">
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

