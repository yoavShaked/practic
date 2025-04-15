import React from "react";
import { FullRecord } from "../../types/FullRecord";
import { Field } from "../Field";
import { Box, VStack, Text, BoxProps } from "@chakra-ui/react";

interface Props extends FullRecord {
  readonly boxProps?: BoxProps;
  readonly title: React.ReactNode;
}

export const Details = React.memo(
  ({ fields, backgorundColor, borderColor, title, boxProps = {} }: Props) => (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      w={"20vw"}
      h={"100%"}
      {...boxProps}
      bg={backgorundColor}
      borderColor={borderColor}
    >
      <Text textAlign="left" fontWeight="bold">
        {title}
      </Text>
      <VStack justifyContent={"space-around"} h={"100%"} p={4}>
        {fields.map(({ label, value }) => (
          <Field key={`${label}-Details`} label={label} value={value} />
        ))}
      </VStack>
    </Box>
  )
);
