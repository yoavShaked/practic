import React from "react";
import { sortOptions, routerTypeOptions } from "./helpers";
import { Flex, Text, Container } from "@chakra-ui/react";
import { SingleSelect } from "../../components/SingleSelect";
import { Option } from "../../types/Option";
import { SortRouterType } from "../../types/Router";
import { RouterType } from "../../types/RouterType";

interface Props {
  readonly handleOnSortChange: (sort?: Option<SortRouterType>) => void;
  readonly handleRouteTypeChange: (routeType?: Option<RouterType>) => void;
  readonly sort?: Option<SortRouterType>;
  readonly routerType?: Option<RouterType>;
}

export const RoutersDashboard = ({
  handleOnSortChange,
  handleRouteTypeChange,
  sort,
  routerType,
}: Props) => (
  <Flex justifyContent={"center"} gap={20} w={"100%"} h={"100%"}>
    <Container>
      <Text as="span" fontWeight="bold">
        Sort By
      </Text>
      <SingleSelect
        options={sortOptions}
        onChange={handleOnSortChange}
        placeholder="Select Sort"
        selectedOption={sort}
      />
    </Container>
    <Container>
      <Text as="span" fontWeight="bold">
        Router Type
      </Text>
      <SingleSelect
        options={routerTypeOptions}
        onChange={handleRouteTypeChange}
        placeholder="Select Type"
        selectedOption={routerType}
      />
    </Container>
  </Flex>
);
