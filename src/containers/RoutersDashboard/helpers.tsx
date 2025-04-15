import { Option } from "../../types/Option";
import { RouterType } from "../../types/RouterType";
import { Text } from "@chakra-ui/react";
import { SortRouterType } from "../../types/Router";

export const sortOptions: ReadonlyArray<Option<SortRouterType>> = [
  {
    id: "name",
    value: <Text>Name</Text>,
  },
  {
    id: "type",
    value: <Text>Type</Text>,
  },
  {
    id: "updatedAt",
    value: <Text>Update Time</Text>,
  },
];

export const routerTypeOptions: ReadonlyArray<Option<RouterType>> = [
  {
    id: RouterType.wifi,
    value: <Text>Wifi</Text>,
  },
  {
    id: RouterType.enterprise,
    value: <Text>Enterprise</Text>,
  },
  {
    id: RouterType.home,
    value: <Text>Home</Text>,
  },
];
