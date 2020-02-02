import React from "react";

import { Box, Button, Collapsible, Header, Heading, Text } from "grommet";

export const PanelPage = props => {
  const [open, setOpen] = React.useState(false);

  return (
      <Box pad="large">
	<Heading>Panel</Heading>
	<Header
	  background="dark-3"
	  pad="small">
          <Text>Title</Text>
	  <Button
	    primary={!open}
	    onClick={() => setOpen(!open)}
	    label="Toggle" />
        </Header>
	<Collapsible open={open} {...props}>
          <Box
            background="light-3"
            pad="medium"
            align="center"
            justify="center"
          >
            <Text>Panel is a grouping component providing with content toggle feature.</Text>
	    <Text>Here this is done with a box inside a Collapsible component.</Text>
          </Box>
        </Collapsible>
      </Box>
  );
};

