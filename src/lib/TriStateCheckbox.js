import React, { useState } from "react";
import { CheckBox } from "grommet";

export const INDETERMINATE = "indeterminate";

export const TriStateCheckbox = ({initialValue = INDETERMINATE, label, onChange = () => {}}) => {

  const [checked, setChecked] = useState(initialValue);
  const onInternalChange = event => {
    if(checked === INDETERMINATE) {
      setChecked(true);
      onChange(true);
    } else if (checked) {
      setChecked(false);
      onChange(false);
    } else {
      setChecked(INDETERMINATE);
      onChange(INDETERMINATE);
    }
  };

  return (
      <CheckBox
        checked={checked === true}
        indeterminate={checked === INDETERMINATE}
        label={label}
        onChange={onInternalChange}
      />
  );
};
