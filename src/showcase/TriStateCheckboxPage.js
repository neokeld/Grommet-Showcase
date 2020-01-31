import React, { useState } from "react";
import { Box, CheckBox, Heading, Text } from "grommet";

export const TriStateCheckboxPage = () => {

  const [checked, setChecked] = useState("");
  const onChange = event => {
    if(checked === "") {
      setChecked(true);
    } else if (checked) {
      setChecked(false);
    } else {
      setChecked("");
    }
  };

  return (
    <Box fill pad="large">
      <Heading>TriStateCheckbox</Heading>
      <CheckBox
        checked={checked}
        indeterminate={checked === ""}
        label="Choice"
        onChange={onChange}
      />
      <Text>Checkbox value: {checked !== "" ?
		               checked ? "true" :
		                 "false"
		             : "empty" }</Text>
    </Box>
  );
};
