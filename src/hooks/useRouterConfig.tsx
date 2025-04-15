import { getColor, routerFields } from "../utils/Router";
import { type Router } from "../types/Router";
import { useColorModeValue } from "@chakra-ui/react";

export const useRouterConfig = (router: Router) => {
  const colorScheme = getColor(router.type);

  const bgColor = useColorModeValue(`${colorScheme}.50`, `${colorScheme}.800`);
  const borderColor = useColorModeValue(
    `${colorScheme}.200`,
    `${colorScheme}.600`
  );

  return {
    fields: routerFields(colorScheme)(router),
    bgColor,
    borderColor,
  };
};
