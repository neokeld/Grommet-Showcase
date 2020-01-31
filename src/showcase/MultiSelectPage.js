import React, { useState } from "react";

import { Box, Button, Heading, Select } from "grommet";

const optionList = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six"
];

export const MultiSelectPage = () => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.value);
  };

  const onClickClearOptions = () => {
    setValue("");
  };

  return (
      <Box fill pad="large" gap="medium">
	<Heading>Multiselect</Heading>
        <Select
          options={optionList}
          onChange={e => onChange(e)}
          value={value}
          placeholder="Select multiple options"
          multiple
        />
        <Button
          onClick={onClickClearOptions}
          disabled={!value}
          label="Clear All"
        />
      </Box>
  );
};
