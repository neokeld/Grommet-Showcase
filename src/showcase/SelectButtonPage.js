import React, { useState } from "react";

import { Box, Heading, RadioButtonGroup } from "grommet";
import { Ascend, Descend } from "grommet-icons";

export const SelectButtonPage = () => {
  const [value, setValue] = useState();

  return (
      <Box pad="large">
	<Heading>Selectbutton</Heading>
        <RadioButtonGroup
          name="radio"
          direction="row"
          gap="xsmall"
          options={["asc", "desc"]}
          value={value}
          onChange={event => setValue(event.target.value)}
        >
          {(option, { checked, hover }) => {
            const Icon = option === "asc" ? Ascend : Descend;
            let background;
            if (checked) background = "brand";
            else if (hover) background = "light-4";
            else background = "light-2";
            return (
              <Box background={background} pad="xsmall">
                <Icon />
              </Box>
            );
          }}
        </RadioButtonGroup>
      </Box>
  );
};

