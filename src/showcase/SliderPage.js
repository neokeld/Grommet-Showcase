import React from "react";

import { Box, Heading, RangeInput } from "grommet";

export const SliderPage = () => {
  const [value, setValue] = React.useState(5);

  const onChange = event => setValue(event.target.value);

  return (
      <Box fill pad="large">
	<Heading>Slider</Heading>
        <RangeInput value={value} onChange={onChange} />
      </Box>
  );
};

