import React from "react";

import { Box, Heading, List } from "grommet";

const data = [
"vin",
"pain",
"fromage"
];

export const ListboxPage = () => {
  const [selected, setSelected] = React.useState();

  return (
      <Box fill pad="large">
	<Heading>Listbox</Heading>
        <List
          data={data}
          itemProps={
            selected >= 0 ? { [selected]: { background: "brand" } } : undefined
          }
          onClickItem={event =>
            setSelected(selected === event.index ? undefined : event.index)
          }
        />
      </Box>
  );
};
