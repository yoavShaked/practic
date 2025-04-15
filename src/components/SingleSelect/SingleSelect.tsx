import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { Option } from "../../types/Option";
import React from "react";

interface Props<Id extends string = string> {
  readonly options: ReadonlyArray<Option<Id>>;
  readonly onChange: (option?: Option<Id>) => void;
  readonly selectedOption?: Option<Id>;
  readonly placeholder?: string;
}

export const SingleSelect = <Id extends string = string>({
  options,
  onChange,
  selectedOption,
  placeholder,
}: Props<Id>) => {
  const menuItems = React.useMemo(
    () =>
      options.map((option) => (
        <MenuItem key={option.id} onClick={() => onChange(option)}>
          {option.value}
        </MenuItem>
      )),
    [options, onChange]
  );

  const menuButtonValue = React.useMemo(
    () =>
      selectedOption !== undefined ? (
        selectedOption.value
      ) : (
        <Text>{placeholder ?? "Select option"}</Text>
      ),
    [placeholder, selectedOption]
  );

  const clear = React.useCallback(() => onChange(), []);

  return (
    <Box>
      <Menu>
        <MenuButton as={Button}>{menuButtonValue}</MenuButton>
        <MenuList>
          <MenuItem onClick={clear}>Clear Selection</MenuItem>
          {menuItems}
        </MenuList>
      </Menu>
    </Box>
  );
};
