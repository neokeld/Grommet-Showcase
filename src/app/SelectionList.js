import React from "react";

import { Box, List } from "grommet";

export const SelectionList = ({data, selectedIndex, setSelectedIndex}) => {

  return (
      <Box align="center" pad="large" gap="large">
        <List
          data={data}
          itemProps={
            selectedIndex >= 0 ? { [selectedIndex]: { background: "brand" } } : undefined
          }
          onClickItem={event =>
            setSelectedIndex(selectedIndex === event.index ? undefined : event.index)
          }
        />
      </Box>
  );
};
