import { getSort } from "../../utils/Router";
import React from "react";
import { Option } from "../../types/Option";
import { RouterType } from "../../types/RouterType";
import { SortRouterType } from "../../types/Router";
import { Router } from "../../types/Router";

export const useRoutersManagment = (routers: ReadonlyArray<Router>) => {
  const [selectedRouter, setSelectedRouter] = React.useState<Router>();
  const [sort, setSort] = React.useState<Option<SortRouterType>>();
  const [routerType, setRouterType] = React.useState<Option<RouterType>>();

  const handleOnSortChange = React.useCallback(
    (sortOption?: Option<SortRouterType>) => {
      setSelectedRouter(undefined);
      setSort(sortOption);
    },
    []
  );

  const handleRouteTypeChange = React.useCallback(
    (routeTypeOption?: Option<RouterType>) => {
      setSelectedRouter(undefined);
      setRouterType(routeTypeOption);
    },
    []
  );

  const filteredItems = React.useMemo(
    () =>
      routerType !== undefined
        ? routers.filter(({ type }) => type === routerType.id)
        : routers,
    [routers, routerType]
  );

  const items = React.useMemo(
    () =>
      sort !== undefined
        ? [...filteredItems].sort(getSort(sort.id))
        : filteredItems,
    [sort, filteredItems]
  );

  return React.useMemo(
    () => ({
      items,
      selectedRouter: selectedRouter ?? items[0],
      sort,
      routerType,
      handleOnSortChange,
      handleRouteTypeChange,
      setSelectedRouter,
    }),
    [
      items,
      selectedRouter,
      sort,
      routerType,
      handleOnSortChange,
      setSelectedRouter,
      handleRouteTypeChange,
    ]
  );
};
