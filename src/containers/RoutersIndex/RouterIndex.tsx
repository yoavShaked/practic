import React from "react";
import { RemoteData } from "../../components/RemoteData";
import { Flex, Box } from "@chakra-ui/react";
import { RouterList } from "../RoutersList";
import { RouterDetails } from "../RouterDetails";
import { RoutersDashboard } from "../RoutersDashboard";
import { useRoutersManagment } from "./useRoutersManagment";
import { useRouters } from "../../hooks";

export const RoutersIndex = () => {
  const { data, isError, isLoading } = useRouters();
  const {
    items,
    sort,
    routerType,
    handleOnSortChange,
    handleRouteTypeChange,
    setSelectedRouter,
    selectedRouter,
  } = useRoutersManagment(data);

  const queryData = React.useMemo(
    () => ({ data, isError, isLoading }),
    [data, isError, isLoading]
  );

  const item = selectedRouter ?? items[0];

  return (
    <Flex h={"100%"} w={"100%"} gap={20}>
      <Flex flexDirection={"column"} p={4} h={"100%"} flex={1}>
        <RoutersDashboard
          sort={sort}
          routerType={routerType}
          handleOnSortChange={handleOnSortChange}
          handleRouteTypeChange={handleRouteTypeChange}
        />
        <Box p={4} h={"100%"}>
          <RemoteData queryData={queryData}>
            {() => <RouterList items={items} onSelect={setSelectedRouter} />}
          </RemoteData>
        </Box>
      </Flex>
      <Box p={4} h={"100%"}>
        <RemoteData queryData={queryData}>
          {() => (item !== undefined ? <RouterDetails {...item} /> : <></>)}
        </RemoteData>
      </Box>
    </Flex>
  );
};
