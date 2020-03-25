import React from 'react';

import { Box, Button, Collapsible, Header, Text } from 'grommet';

export const Panel = ({ title, buttonLabel = 'Toggle', children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header background="dark-3" pad="small">
        <Text>{title}</Text>
        <Button
          primary={!open}
          onClick={() => setOpen(!open)}
          label={buttonLabel}
        />
      </Header>
      <Collapsible open={open}>
        <Box background="light-3" pad="medium" align="center" justify="center">
          {children}
        </Box>
      </Collapsible>
    </>
  );
};
