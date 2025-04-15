import React from "react";
import { RouterCard } from "../RouterCard";
import { Router } from "../../types/Router";
import { HasOnSelect } from "../../types/HasOnSelect";
import { Box } from "@chakra-ui/react";
import { VirtualizedList } from "../../components/VirtualizedList";

interface Props {
  readonly items: ReadonlyArray<Router>;
  readonly onSelect: (item: Router) => void;
  readonly itemSize?: number;
}

const renderRouterItem =
  (onSelect: (item: Router) => void) => (router: Router) =>
    (
      <Box cursor={"pointer"} onClick={() => onSelect(router)}>
        <RouterCard {...router} />
      </Box>
    );

export const RouterList = React.memo(
  ({ items, onSelect, itemSize = 100 }: Props) => (
    <VirtualizedList items={items} itemSize={itemSize}>
      {renderRouterItem(onSelect)}
    </VirtualizedList>
  )
);
