import React, { useRef, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { IUser } from "../App";
import { RowItem } from "./RowItem";
import AutoSizer from "react-virtualized-auto-sizer";

interface IProps {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: IUser[];
  loadNextPage: (n: number) => void;
}

export default function ExampleWrapper({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage
}: IProps) {
  const listRef = useRef(null);

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;

  const Item = ({ index }: { index: number }) => {
    if (!isItemLoaded(index)) {
      return <p>"Loading..."</p>;
    }

    return <RowItem user={items[index]} number={index} />;
  };

  return (
    <AutoSizer>
      {({ width, height }) => (
        <InfiniteLoader
          ref={listRef}
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <List
              className="List"
              height={height}
              itemCount={itemCount}
              itemSize={30}
              onItemsRendered={onItemsRendered}
              ref={ref}
              width={width}
            >
              {Item}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}
