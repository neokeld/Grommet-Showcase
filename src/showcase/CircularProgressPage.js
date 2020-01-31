import React, { useState, useEffect, useRef } from "react";

import { Box, Heading, Meter } from "grommet";

export const CircularProgressPage = () => {
  const [value, setValue] = useState(20);

  const timer = useRef();
  clearTimeout(timer.current);
  timer.current = setTimeout(() => {
    setValue(value < 100 ? value + 8 : 20);
  }, 2000);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
      <Box fill pad="large">
	<Heading>CircularProgress</Heading>
        <Meter
          type="circle"
          background="light-2"
          values={[{ value, color: value > 50 ? "brand" : "accent-1" }]}
        />
      </Box>
  );
};

