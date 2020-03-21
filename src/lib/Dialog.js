import React from "react";

import { Box, Button, Layer } from "grommet";

export const Dialog = ({onClose, children}) => (
        <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="medium">
	    {children}
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
              />
            </Box>
          </Box>
        </Layer>
);
