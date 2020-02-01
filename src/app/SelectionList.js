import React from "react";

import { Box, List } from "grommet";

export const SelectionList = ({data, selected, setSelected}) => (
      <Box align="center" pad="large" gap="large">
        <List
          data={data}
          itemProps={
            selected.index >= 0 ? { [selected.index]: { background: "brand" } } : undefined
          }
          onClickItem={event => 
            setSelected({
	      index: event.index,
	      item: event.item
	    })}
        />
      </Box>
);
