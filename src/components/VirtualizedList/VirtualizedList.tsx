import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";

interface Props<T extends unknown> {
  readonly items: ReadonlyArray<T>;
  readonly children: (props: T) => React.ReactElement;
  readonly itemSize: number;
}

export const VirtualizedList = <T,>({
  items,
  children,
  itemSize,
}: Props<T>) => (
  <AutoSizer>
    {({
      width,
      height,
    }: {
      readonly width: number;
      readonly height: number;
    }) => (
      <List
        itemCount={items.length}
        itemSize={itemSize}
        width={width}
        height={height}
        itemData={items}
      >
        {({ data, index, style }) => {
          return data[index] !== undefined ? (
            <div key={index} style={style}>
              {children(data[index])}
            </div>
          ) : null;
        }}
      </List>
    )}
  </AutoSizer>
);
