import { Field as Props } from "../../types/Field";
import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

export const Field = React.memo(({ value, label }: Props) => (
  <Flex flexDirection={"column"} w={"100%"}>
    <Text as="span" fontWeight="bold">
      {`${label}: `}
    </Text>
    {value}
  </Flex>
));
