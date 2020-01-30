import React from "react";
import {
  Box,
  Calendar,
  DropButton,
  Heading
} from "grommet";
import { Schedule } from "grommet-icons";

const DropContent = ({ date: initialDate, onClose }) => (
      <Calendar
        date={initialDate}
        onSelect={onClose}
      />
);

export const DateInput = () => {
  const [date, setDate] = React.useState();
  const [open, setOpen] = React.useState();

  const onClose = (nextDate) => {
    setDate(nextDate);
    setOpen(false);
  };

  return (
      <Box fill pad="large">
	<Heading>Basic Calendar</Heading>
	<Box width="small">
        <DropButton
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          dropContent={
            <DropContent date={date} onClose={onClose} />
          }
	  label={date
            ? new Date(date).toLocaleDateString()
            : "Select date"}
          icon={<Schedule />}
	  reverse={true}
	  hoverIndicator={true}
        />
	</Box>
	<Heading>Inline Calendar</Heading>
	<Calendar date={new Date()} />
      </Box>
  );
};

