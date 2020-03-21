import React, { useState, useRef, useEffect, useCallback } from "react";

import { Search } from "grommet-icons";
import { Box, Heading, Text, TextInput } from "grommet";

const folks = [
  {
    name: "Michel Eyquem de Montaigne",
  },
  {
    name: "Charles Louis de Secondat, baron de La Brède et de Montesquieu",
  },
  {
    name: "Étienne de La Boétie",
  },
  {
    name: "Henri de Bourbon",
  },
  {
    name: "André Portier",
  },
  {
    name: "Ange-Jacques Gabriel",
  },
  {
    name: "André-Daniel Laffon de Ladebat",
  }
];

const Suggestion = ({name, index, list}) => (
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

);

const SearchBar = ({boxRef, suggestionOpen, children}) => {
  const pad = { horizontal: "small", vertical: "xsmall" };
  const border = {
    side: "all",
    color: suggestionOpen ? "transparent" : "border"
  };

  return (
    <Box
      ref={boxRef}
      width="large"
      direction="row"
      align="center"
      pad={pad}
      round="small"
      elevation={suggestionOpen ? "medium" : undefined}
      border={border}
      style={
        suggestionOpen
          ? {
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px"
            }
          : undefined
      }
    >
    {children}
    </Box>
  );
};

const AutoComplete = ({folks}) => {
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
      .filter(({ name }) => {
        const normalized_name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const normalized_value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return normalized_name.indexOf(normalized_value) >= 0;
})
      .map(({ name }, index, list) => ({
        label: (<Suggestion
		  name={name}
		  index={index}
		  list={list} />),
        value: name
      }));
  };

  return (
    <SearchBar
      boxRef={boxRef}
      suggestionOpen={suggestionOpen}
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
    </SearchBar>

  );
};

export const AutoCompletePage = () => {
  return (
      <Box fill align="center">
        <Box fill="horizontal" pad="large">
	  <Heading>AutoComplete</Heading>
	</Box>
	<AutoComplete folks={folks} />
	<Box fill pad="large">
	  <Text weight="bold">List of folks names:</Text>
	  {folks.map(
	    f => (
	      <Text key={f.name}>{f.name}</Text>
	    )
	  )}
	</Box>
      </Box>
  );
};

