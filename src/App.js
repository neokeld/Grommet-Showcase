import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import { AppBar } from "./app/AppBar";
import { Sidebar } from "./app/Sidebar";
import { SelectionList } from "./app/SelectionList";

import { components } from "./showcase";

export const App = () => {
  const [selected, setSelected] = useState({
    index: 0,
    item: "AppBar"
  });

  return (
  <Grommet plain full>
      <AppBar />
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Sidebar>
          <SelectionList data={Object.keys(components)} selected={selected} setSelected={setSelected} />
        </Sidebar>
        <Box flex align="center" justify="center">
	  {components[selected.item]}
        </Box>
      </Box>
  </Grommet>
);
};
