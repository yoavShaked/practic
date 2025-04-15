import React from "react";
import { FullRecord } from "../../types/FullRecord";
import { Field } from "../Field";
import { Box, Flex, BoxProps } from "@chakra-ui/react";

interface Props extends FullRecord {
  readonly boxProps?: BoxProps;
}

export const Card = React.memo(
  ({ fields, backgorundColor, borderColor, boxProps = {} }: Props) => (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      {...boxProps}
      bg={backgorundColor}
      borderColor={borderColor}
    >
      <Flex justify="space-around" align="center">
        {fields.map(({ label, value }) => (
          <Field key={label} value={value} label={label} />
        ))}
      </Flex>
    </Box>
  )
);
