import React from "react";

import { Box, Button, Grommet, Heading, Layer, Select, Text } from "grommet";

export const DialogPage = () => {
  const [open, setOpen] = React.useState();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Box fill pad="large">
	<Heading>Dialog</Heading>
        <Button
          label="Open"
          onClick={onOpen}
        />
      </Box>
      {open && (
        <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Confirm
            </Heading>
            <Text>Are you sure you want to close this dialog?</Text>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: "medium", bottom: "small" }}
            >
              <Button
                label="Close"
                onClick={onClose}
                primary
                color="status-critical"
              />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};
