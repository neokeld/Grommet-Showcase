import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import { AppBar } from "./app/AppBar";
import { Sidebar } from "./app/Sidebar";
import { SelectionList } from "./app/SelectionList";

import { AutoCompletePage } from "./showcase/AutoCompletePage";
import { CalendarPage } from "./showcase/DateInputPage";
import { CheckBoxPage } from "./showcase/SimpleCheckBoxPage";

import { list } from "./list";

export const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
  <Grommet plain full>
      <AppBar />
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Sidebar>
          <SelectionList data={list} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </Sidebar>
        <Box flex align="center" justify="center">
	  {"AutoComplete" === list[selectedIndex] && <AutoComplete />}
	  {"Calendar" === list[selectedIndex] && <DateInput />}
	  {"Checkbox" === list[selectedIndex] && <SimpleCheckBox />}
        </Box>
      </Box>
  </Grommet>
);
};
