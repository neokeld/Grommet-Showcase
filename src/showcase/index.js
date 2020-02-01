import React from "react";

import { AutoCompletePage } from "./AutoCompletePage";
import { CalendarPage } from "./CalendarPage";
import { CheckboxPage } from "./CheckboxPage";
import { ChipsPage } from "./ChipsPage";
import { DialogPage } from "./DialogPage";
import { DropdownPage } from "./DropdownPage";
import { GrowlPage } from "./GrowlPage";
import { InputSwitchPage } from "./InputSwitchPage";
import { ListboxPage } from "./ListboxPage";
import { MessagesPage } from "./MessagesPage";
import { ProgressBarPage } from "./ProgressBarPage";
import { SelectButtonPage } from "./SelectButtonPage";
import { SliderPage } from "./SliderPage";
import { ToggleButtonPage } from "./ToggleButtonPage";
import { MultiSelectPage } from "./MultiSelectPage";
import { CircularProgressPage } from "./CircularProgressPage";
import { AppBarPage } from "./AppBarPage";
import { AvatarPage } from "./AvatarPage";
import { TriStateCheckboxPage } from "./TriStateCheckboxPage";

export const components = {
  "AppBar" : <AppBarPage/>,
  "AutoComplete" : <AutoCompletePage/>, 
  "Avatar" : <AvatarPage/>,
  "Calendar" : <CalendarPage/>,
  "Checkbox" : <CheckboxPage/>,
  "Chips" : <ChipsPage/>,
  "CircularProgress" : <CircularProgressPage/>,
  "Dialog" : <DialogPage/>,
  "Dropdown" : <DropdownPage/>,
  "Growl" : <GrowlPage/>,
  "InputSwitch" : <InputSwitchPage/>,
  "Listbox" : <ListboxPage/>,
  "Messages" : <MessagesPage/>,
  "MultiSelect" : <MultiSelectPage/>,
  "ProgressBar" : <ProgressBarPage/>,
  "SelectButton" : <SelectButtonPage/>,
  "Slider" : <SliderPage/>,
  "ToggleButton" : <ToggleButtonPage/>,
  "TriStateCheckbox" : <TriStateCheckboxPage/>,
};
