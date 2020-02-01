import React from "react";

import { Box, Button, Collapsible, Heading, Text } from "grommet";

export const MessagesPage = props => {
  const [open, setOpen] = React.useState(false);

  return (
      <Box pad="large" gap="medium">
        <Heading>Messages</Heading>
        <Button primary onClick={() => setOpen(!open)} label="Toggle" />
        <Collapsible open={open} {...props}>
          <Box
            background="light-2"
            round="medium"
            pad="medium"
            align="center"
            justify="center"
          >
            <Text>This is a box inside a Collapsible component</Text>
          </Box>
        </Collapsible>
        <Text>This is other content outside the Collapsible box</Text>
      </Box>
  );
};
