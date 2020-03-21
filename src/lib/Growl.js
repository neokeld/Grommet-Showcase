import React from "react";

import { FormClose } from "grommet-icons";
import { Box, Button, Layer } from "grommet";

export const Growl = ({onClose, position, children}) => (
        <Layer
          position={position}
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
            background="brand"
          >
            <Box align="center" direction="row" gap="xsmall">
              {children}
            </Box>
            <Button icon={<FormClose />} onClick={onClose} plain />
          </Box>
        </Layer>
);

