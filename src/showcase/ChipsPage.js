import React from "react";

import { Box, Heading, Keyboard, TextInput } from "grommet";

import { Tag } from "../lib/Tag";

const allSuggestions = ["baguette", "vin", "béret", "chocolatine"];

const TagList = ({ value, onRemove }) => (
  <>
    {value.map((v, index) => (
      <Tag
        margin="xxsmall"
        key={`${v}${index + 0}`}
        onRemove={() => onRemove(v)}
	round="medium"
      >
        {v}
      </Tag>
    ))}
  </>
);

const SearchInput = ({ onAddTag, ...rest }) => (
  <Box flex style={{ minWidth: "120px" }}>
    <TextInput
      type="search"
      plain
      {...rest}
      onSelect={event => {
        event.stopPropagation();
        onAddTag(event.suggestion);
      }}
    />
  </Box>
);

const TagInput = ({ value = [], onAdd, onChange, onRemove, ...rest }) => {
  const [currentTag, setCurrentTag] = React.useState("");
  const [box, setBox] = React.useState();
  const boxRef = React.useCallback(setBox, []);

  const updateCurrentTag = event => {
    setCurrentTag(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const onAddTag = tag => {
    if (onAdd) {
      onAdd(tag);
    }
  };

  const onEnter = () => {
    if (currentTag.length) {
      onAddTag(currentTag);
      setCurrentTag("");
    }
  };

  return (
    <Keyboard onEnter={onEnter}>
      <Box
        direction="row"
        align="center"
        pad={{ horizontal: "xsmall" }}
        border="all"
        ref={boxRef}
        wrap
      >
        <TagList value={value} onRemove={onRemove} />
        <SearchInput onAddTag={onAddTag} dropTarget={box} onChange={updateCurrentTag} value={currentTag} {...rest} />
      </Box>
    </Keyboard>
  );
};

const removeTag = (selectedTags, tag) => {
    const removeIndex = selectedTags.indexOf(tag);
    const newTags = [...selectedTags];
    if (removeIndex >= 0) {
      newTags.splice(removeIndex, 1);
    }
    return newTags;
};

export const ChipsPage = () => {
  const [selectedTags, setSelectedTags] = React.useState(["baguette", "vin"]);
  const [suggestions, setSuggestions] = React.useState(allSuggestions);

  const onRemoveTag = tag => {
    setSelectedTags(removeTag(selectedTags, tag));
  };

  const onAddTag = tag => setSelectedTags([...selectedTags, tag]);

  const onFilterSuggestion = value => setSuggestions(
    allSuggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase()) >= 0
    )
  );

  return (
      <Box pad="large">
	<Heading>Chips</Heading>
        <TagInput
          placeholder="Search for aliases..."
          suggestions={suggestions}
          value={selectedTags}
          onRemove={onRemoveTag}
          onAdd={onAddTag}
          onChange={({ target: { value } }) => onFilterSuggestion(value)}
        />
      </Box>
  );
};
