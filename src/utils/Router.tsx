import { RouterType } from "../types/RouterType";
import { byDate, byString } from "./SortBy";
import { Router, SortRouterType } from "../types/Router";
import { Field } from "../types/Field";
import { Text, Badge } from "@chakra-ui/react";

export const sortByDate = (a: Router, b: Router) =>
  byDate(a.updatedAt, b.updatedAt);

export const sortByType = (a: Router, b: Router) => byString(a.type, b.type);

export const sortByName = (a: Router, b: Router) => byString(a.name, b.name);

export const getColor = (routerType: RouterType): string => {
  switch (routerType) {
    case RouterType.wifi:
      return "red";
    case RouterType.enterprise:
      return "blue";
    case RouterType.home:
      return "green";
    default: {
      const _: never = routerType;
      throw new Error(`Invalid router type: ${routerType}`);
    }
  }
};

export const getSort = (sortType: SortRouterType) => {
  switch (sortType) {
    case "type":
      return sortByType;
    case "name":
      return sortByName;
    case "updatedAt":
      return sortByDate;
    default: {
      const _: never = sortType;
      throw new Error(`Invalid sort type: ${sortType}`);
    }
  }
};

export const getSpesificRouterFields = (
  router: Router
): ReadonlyArray<Field> => {
  switch (router.type) {
    case RouterType.wifi:
      return [
        {
          label: "Wifi Chanels",
          value: <Text>{router.wifiChannels.join(", ")}</Text>,
        },
        {
          label: "Supports DualBand",
          value: <Text>{router.supportsDualBand ? "True" : "False"}</Text>,
        },
      ];
    case RouterType.enterprise:
      return [
        {
          label: "Port Count",
          value: <Text>{router.portCount}</Text>,
        },
        {
          label: "Supported Protocols",
          value: <Text>{router.supportedProtocols.join(", ")}</Text>,
        },
        {
          label: "Throughput Gbps",
          value: <Text>{router.throughputGbps}</Text>,
        },
      ];
    case RouterType.home:
      return [
        {
          label: "Connected Devices",
          value: <Text>{router.connectedDevices}</Text>,
        },
        {
          label: "Parental Controls Enabled",
          value: (
            <Text>{router.parentalControlsEnabled ? "True" : "False"}</Text>
          ),
        },
        {
          label: "Max Bandwidth Mbps",
          value: <Text>{router.maxBandwidthMbps}</Text>,
        },
      ];
    default: {
      const _: never = router;
      throw new Error(`Invalid router`);
    }
  }
};

export const routerFields =
  (colorScheme: string) =>
  (router: Router): ReadonlyArray<Field> =>
    [
      { label: "ID", value: <Text as="span">{router.id}</Text> },
      { label: "Name", value: <Text as="span">{router.name}</Text> },
      {
        label: "Type",
        value: <Badge colorScheme={colorScheme}>{router.type}</Badge>,
      },
      {
        label: "Last Updated",
        value: (
          <Text as="span">{new Date(router.updatedAt).toLocaleString()}</Text>
        ),
      },
    ];
