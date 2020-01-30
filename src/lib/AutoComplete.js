import React, { useState, useRef, useEffect, useCallback } from "react";

import { Search } from "grommet-icons";
import { Box, Heading, Text, TextInput } from "grommet";

const folks = [
  {
    name: "Alan Souza",
  },
  {
    name: "Bryan Jacquot",
  },
  {
    name: "Chris Carlozzi",
  },
  {
    name: "Eric Soderberg",
  },
  {
    name: "Marlon Parizzotto",
  },
  {
    name: "Tales Chaves",
  },
  {
    name: "Tracy Barmore",
  }
];

export const AutoComplete = () => {
  const [value, setValue] = useState("");
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const [suggestedFolks, setSuggestedFolks] = useState([]);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const boxRef = useRef();

  useEffect(() => {
    forceUpdate();
  }, [forceUpdate]);

  const onChange = event => {
    const { value: newValue } = event.target;
    setValue(newValue);

    if (!newValue.trim()) {
      setSuggestedFolks([]);
    } else {
      // simulate an async call to the backend
      setTimeout(() => setSuggestedFolks(folks), 200);
    }
  };

  const onSelect = event => setValue(event.suggestion.value);

  const renderSuggestions = () => {
    return suggestedFolks
      .filter(
        ({ name }) => name.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
      .map(({ name, imageUrl }, index, list) => ({
        label: (
          <Box
            direction="row"
            align="center"
            gap="small"
            border={index < list.length - 1 ? "bottom" : undefined}
            pad="small"
          >
            <Text>
              <strong>{name}</strong>
            </Text>
          </Box>
        ),
        value: name
      }));
  };

  return (
      <Box fill align="center">
        <Box fill="horizontal" pad="large">
	  <Heading>AutoComplete</Heading>
	</Box>
        <Box
          ref={boxRef}
          width="large"
          direction="row"
          align="center"
          pad={{ horizontal: "small", vertical: "xsmall" }}
          round="small"
          elevation={suggestionOpen ? "medium" : undefined}
          border={{
            side: "all",
            color: suggestionOpen ? "transparent" : "border"
          }}
          style={
            suggestionOpen
              ? {
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px"
                }
              : undefined
          }
        >
          <Search color="brand" />
          <TextInput
            type="search"
            dropTarget={boxRef.current}
            plain
            value={value}
            onChange={onChange}
            onSelect={onSelect}
            suggestions={renderSuggestions()}
            placeholder="Enter your name..."
            onSuggestionsOpen={() => setSuggestionOpen(true)}
            onSuggestionsClose={() => setSuggestionOpen(false)}
          />
        </Box>
	<Box fill pad="large">
	  <Text weight="bold">List of folks names:</Text>
	  {folks.map(
	    f => (
	      <Text>{f.name}</Text>
	    )
	  )}
	</Box>
      </Box>
  );
};

