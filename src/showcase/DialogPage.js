import React from "react";

import { Box, Button, Heading, Text } from "grommet";

import { Dialog } from "../lib/Dialog";

export const DialogPage = () => {
  const [open, setOpen] = React.useState();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Box pad="large">
	<Heading>Dialog</Heading>
        <Button
          label="Open"
          onClick={onOpen}
        />
      </Box>
      {open && (
        <Dialog onClose={onClose}>
            <Heading level={3} margin="none">
              Confirm
            </Heading>
            <Text>Are you sure you want to close this dialog?</Text>
        </Dialog>
      )}
    </>
  );
};
