import React, { useState } from "react";
import { Box, CheckBox, Heading } from "grommet";

const BasicCheckBox = () => {
  const [checked, setChecked] = useState(false);
  const onChange = event => setChecked(event.target.checked);

  return (
    <CheckBox label="Choice" checked={checked} onChange={onChange} />
  );
};

const checkboxes = ["fruits", "vegetables", "olive oil"];

const CheckboxesList = ({ checkboxes, checked, setChecked }) => {
  const onCheck = (event, value) => {
    if (event.target.checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter(item => item !== value));
    }
  };

  return (
    <Box direction="row" gap="medium">
      {checkboxes.map(item => (
        <CheckBox
          key={item}
          checked={checked.includes(item)}
          label={item}
          onChange={e => onCheck(e, item)}
        />
      ))}
    </Box>
  );
};

const IndeterminateCheckBox = ({ checkboxes }) => {
  const [checked, setChecked] = useState([]);

  const onCheckAll = event => {
    if (event.target.checked) {
      setChecked(checkboxes);
    } else {
      setChecked([]);
    }
  };

  return (
        <Box direction="row" gap="medium">
          <CheckBox
            checked={checked.length === checkboxes.length}
            indeterminate={checked.length > 0 && checked.length < checkboxes.length}
            label="All"
            onChange={onCheckAll}
          />
          <CheckboxesList
	    checkboxes={checkboxes}
	    checked={checked}
	    setChecked={setChecked}
	  />
        </Box>
  );
};

export const CheckboxPage = () => {
  return (
    <Box pad="large">
      <Heading>Single Checkbox</Heading>
      <BasicCheckBox />
      <Heading>Multiple Checkboxes</Heading>
      <IndeterminateCheckBox checkboxes={checkboxes} />
    </Box>
  );
};

