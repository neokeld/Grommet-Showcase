import React from 'react';
import { Box, Calendar, DropButton, Heading } from 'grommet';
import { Schedule } from 'grommet-icons';

const CalendarDropButton = ({ date, onSelect, ...rest }) => (
  <DropButton
    dropContent={<Calendar date={date} onSelect={onSelect} />}
    label={date ? new Date(date).toLocaleDateString() : 'Select date'}
    icon={<Schedule />}
    reverse={true}
    hoverIndicator={true}
    {...rest}
  />
);

export const CalendarPage = () => {
  const [date, setDate] = React.useState();
  const [open, setOpen] = React.useState();

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);
  const onSelect = (nextDate) => {
    setDate(nextDate);
    setOpen(false);
  };

  return (
    <Box pad="large">
      <Heading>Basic Calendar</Heading>
      <Box width="small">
        <CalendarDropButton
          date={date}
          onSelect={onSelect}
          open={open}
          onClose={onClose}
          onOpen={onOpen}
        />
      </Box>
      <Heading>Inline Calendar</Heading>
      <Calendar date={new Date().toISOString()} />
    </Box>
  );
};
