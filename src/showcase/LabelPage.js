import React from 'react';
import { Box, Heading } from 'grommet';

import { Tag } from '../lib/Tag';

export const LabelPage = () => (
  <Box pad="large" gap="medium">
    <Heading>Label / Chip / Tag</Heading>
    <Box direction="row" gap="small">
      <Tag round="medium">Religieuse au café</Tag>
      <Tag round="small" background="accent-1" onRemove={() => {}}>
        Chausson aux pommes
      </Tag>
      <Tag background="neutral-2">Jésuite</Tag>
    </Box>
  </Box>
);
