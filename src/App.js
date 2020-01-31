import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import { AppBar } from "./app/AppBar";
import { Sidebar } from "./app/Sidebar";
import { SelectionList } from "./app/SelectionList";

import { AutoCompletePage } from "./showcase/AutoCompletePage";
import { CalendarPage } from "./showcase/CalendarPage";
import { CheckboxPage } from "./showcase/CheckboxPage";
import { ChipsPage } from "./showcase/ChipsPage";
import { DialogPage } from "./showcase/DialogPage";
import { DropdownPage } from "./showcase/DropdownPage";
import { GrowlPage } from "./showcase/GrowlPage";
import { InputSwitchPage } from "./showcase/InputSwitchPage";

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
	  {"AutoComplete" === list[selectedIndex] ? <AutoCompletePage /> :
	     "Calendar" === list[selectedIndex] ? <CalendarPage /> :
	       "Checkbox" === list[selectedIndex] ? <CheckboxPage /> :
	         "Chips" === list[selectedIndex] ? <ChipsPage /> :
	           "Dialog" === list[selectedIndex] ? <DialogPage /> :
	             "Dropdown" === list[selectedIndex] ? <DropdownPage /> :
		       "Growl" === list[selectedIndex] ? <GrowlPage /> :
		         "InputSwitch" === list[selectedIndex] && <InputSwitchPage />
	  }
        </Box>
      </Box>
  </Grommet>
);
};
