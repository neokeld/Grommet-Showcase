import React, { useState } from "react";
import { Box, CheckBox, Heading, Paragraph } from "grommet";

export const TriStateCheckboxPage = () => {

  const INDETERMINATE = "indeterminate";
  const [checked, setChecked] = useState(INDETERMINATE);
  const onChange = event => {
    if(checked === INDETERMINATE) {
      setChecked(true);
    } else if (checked) {
      setChecked(false);
    } else {
      setChecked(INDETERMINATE);
    }
  };

  return (
    <Box pad="large">
      <Heading>TriStateCheckbox</Heading>
      <CheckBox
        checked={checked === true}
        indeterminate={checked === INDETERMINATE}
        label="Choice"
        onChange={onChange}
      />
      <Paragraph>Checkbox value: {checked !== INDETERMINATE
                              ? checked
                                ? "true"
                                : "false"
                              : INDETERMINATE}</Paragraph>
    </Box>
  );
};
