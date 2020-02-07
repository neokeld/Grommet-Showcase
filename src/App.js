import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

import { AppBar } from "./app/AppBar";
import { Sidebar } from "./app/Sidebar";
import { SelectionList } from "./app/SelectionList";

import { components } from "./showcase";

export const App = () => {
  const [selected, setSelected] = useState({
    index: 0,
    item: "LandingPage"
  });

  return (
  <Grommet theme={grommet} full>
      <AppBar />
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Sidebar>
          <SelectionList data={Object.keys(components)} selected={selected} setSelected={setSelected} />
        </Sidebar>
        <Box flex>
	  {components[selected.item]}
        </Box>
      </Box>
  </Grommet>
);
};
