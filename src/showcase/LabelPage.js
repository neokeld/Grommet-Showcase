import React from "react";
import { Box, Button, Heading, Text } from "grommet";
import { FormClose } from "grommet-icons";

const Tag = ({ children, onRemove, ...rest }) => {
  const tag = (
    <Box
      direction="row"
      align="center"
      background="brand"
      pad={{ horizontal: "xsmall", vertical: "xxsmall" }}
      margin={{ vertical: "xxsmall" }}
      {...rest}
    >
      <Text size="xsmall" margin={{ right: "xxsmall" }}>
        {children}
      </Text>
      {onRemove && <FormClose size="small" color="white" />}
    </Box>
  );

  if (onRemove) {
    return <Button onClick={onRemove}>{tag}</Button>;
  }
  return tag;
};

export const LabelPage = () => (
  <Box pad="large" gap="medium">
    <Heading>Label / Chip</Heading>
    <Box direction="row" gap="small">
      <Tag round="medium">Religieuse au café</Tag>
      <Tag round="small" background="accent-1" onRemove={()=>{}}>Chausson aux pommes</Tag>
      <Tag background="neutral-2">Jésuite</Tag>
    </Box>
  </Box>
);

