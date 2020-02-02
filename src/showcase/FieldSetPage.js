import React from "react";
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Heading,
  RadioButtonGroup,
  Select,
  Text
} from "grommet";
import styled from "styled-components";

const FieldSet = styled.fieldset``;
const Legend = styled.legend``;
const StyledFieldSet = styled.fieldset`
  border: 4px solid;
`;

export const FieldSetPage = () => (
  <Box pad="large">
    <Heading>FieldSet</Heading>
    <Box width="medium">
      <Form
        onReset={event => console.log(event)}
        onSubmit={({ value, touched }) =>
          console.log("Submit", value, touched)
        }
      >
        <FieldSet>
	  <Legend>Simple FieldSet</Legend>
          <FormField
            label="Name"
            name="name"
            required
          />
          <FormField label="Email" name="email" type="email" required />
        </FieldSet>
        <StyledFieldSet>
	  <Legend>
	    <Text>Styled FieldSet</Text>
	  </Legend>
          <FormField
            name="subscribe"
            component={CheckBox}
            label="Subscribe?"
          />
          <FormField
            name="ampm"
            component={RadioButtonGroup}
            options={["morning", "evening"]}
          />
          <FormField
            label="Size"
            name="size"
            component={Select}
            onChange={event => console.log(event)}
            options={["small", "medium", "large", "xlarge"]}
          />
        </StyledFieldSet>
        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          <Button label="Cancel" />
          <Button type="reset" label="Reset" />
          <Button type="submit" label="Update" primary />
        </Box>
      </Form>
    </Box>
  </Box>
);

