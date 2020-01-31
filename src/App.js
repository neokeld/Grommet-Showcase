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
import { ListboxPage } from "./showcase/ListboxPage";
import { MessagesPage } from "./showcase/MessagesPage";
import { ProgressBarPage } from "./showcase/ProgressBarPage";
import { SelectButtonPage } from "./showcase/SelectButtonPage";
import { SliderPage } from "./showcase/SliderPage";
import { ToggleButtonPage } from "./showcase/ToggleButtonPage";
import { MultiSelectPage } from "./showcase/MultiSelectPage";
import { CircularProgressPage } from "./showcase/CircularProgressPage";
import { AppBarPage } from "./showcase/AppBarPage";
import { AvatarPage } from "./showcase/AvatarPage";

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
		         "InputSwitch" === list[selectedIndex] ? <InputSwitchPage /> :
		           "Listbox" === list[selectedIndex] ? <ListboxPage /> :
		             "Messages" === list[selectedIndex] ? <MessagesPage /> :
		               "ProgressBar" === list[selectedIndex] ? <ProgressBarPage /> :
		                 "SelectButton" === list[selectedIndex] ? <SelectButtonPage /> :
		                   "Slider" === list[selectedIndex] ? <SliderPage /> :
		                     "ToggleButton" === list[selectedIndex] ? <ToggleButtonPage /> :
		                       "MultiSelect" === list[selectedIndex] ? <MultiSelectPage /> :
		                         "CircularProgress" === list[selectedIndex] ? <CircularProgressPage /> :
		                           "AppBar" === list[selectedIndex] ? <AppBarPage /> :
		                             "Avatar" === list[selectedIndex] && <AvatarPage />
	  }
        </Box>
      </Box>
  </Grommet>
);
};
