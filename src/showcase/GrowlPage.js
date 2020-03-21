import React from "react";

import { Add, StatusGood } from "grommet-icons";
import { Box, Button, Heading, Text } from "grommet";

import { Growl } from "../lib/Growl";

export const GrowlPage = () => {
  const [open, setOpen] = React.useState();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Box pad="large">
	<Heading>Growl</Heading>
        <Button
          icon={<Add color="brand" />}
          label="Open"
          onClick={onOpen}
        />
      </Box>
      {open && (
        <Growl
          position="bottom"
          onClose={onClose}
        >
          <StatusGood />
          <Text>A new growl has been successfully opened</Text>
        </Growl>
      )}
    </>
  );
};
