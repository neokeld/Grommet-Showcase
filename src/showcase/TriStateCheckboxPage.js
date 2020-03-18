import React, { useState } from "react";
import { Box, Heading, Text } from "grommet";

import { TriStateCheckbox, INDETERMINATE } from "../lib/TriStateCheckbox";

export const TriStateCheckboxPage = () => {

  const [checked, setChecked] = useState(INDETERMINATE);
  const onChange = value => {
    if(value === INDETERMINATE) {
        setChecked("indeterminate");
    } else if (value) {
        setChecked("true");
    } else {
        setChecked("false");
    } 
  };

  return (
    <Box pad="large">
      <Heading>TriStateCheckbox</Heading>
      <TriStateCheckbox label="Choice"
	  onChange={onChange} />
      <Text>Checkbox value: {checked}</Text>
      <Text>TriStateCheckbox has default initial value: indeterminate</Text>
      <Heading>TriStateCheckbox with initial value: true</Heading>
      <TriStateCheckbox label="Choice"
	  initialValue={true} />
    </Box>
  );
};
