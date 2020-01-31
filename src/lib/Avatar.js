import React from "react";
import { Box } from "grommet";

export const Avatar = ({ ...rest }) => (
  <Box
    height="xxsmall"
    width="xxsmall"
    round="full"
    // eslint-disable-next-line max-len
    background="url(//upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Montaigne-Dumonstier.jpg/260px-Montaigne-Dumonstier.jpg)"
    {...rest}
  />
);

