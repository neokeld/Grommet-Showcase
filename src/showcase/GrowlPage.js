import React from "react";

import { Add, FormClose, StatusGood } from "grommet-icons";
import { Box, Button, Heading, Layer, Text } from "grommet";

export const GrowlPage = () => {
  const [open, setOpen] = React.useState();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Box fill pad="large">
	<Heading>Growl</Heading>
        <Button
          icon={<Add color="brand" />}
          label="Open"
          onClick={onOpen}
        />
      </Box>
      {open && (
        <Layer
          position="bottom"
          modal={false}
          margin="medium"
          onEsc={onClose}
          responsive={false}
          plain
        >
          <Box
            align="center"
            direction="row"
            gap="small"
            justify="between"
            round="small"
            elevation="medium"
            pad="small"
            background="status-ok"
          >
            <Box align="center" direction="row" gap="xsmall">
              <StatusGood />
              <Text>A new growl has been successfully opened</Text>
            </Box>
            <Button icon={<FormClose />} onClick={onClose} plain />
          </Box>
        </Layer>
      )}
    </>
  );
};
