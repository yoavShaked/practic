import React from "react";
import { DefinedUseQueryResult } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";

interface Props {
  readonly loadingComponent?: React.ReactNode;
  readonly errorComponent?: React.ReactNode;
  readonly children: () => React.ReactElement;
  readonly queryData: {
    readonly isLoading: boolean;
    readonly isError: boolean;
    readonly data: unknown;
  };
}

const DefaultError = () => <div>Error...</div>;

export const RemoteData = ({
  loadingComponent = <Spinner />,
  errorComponent = <DefaultError />,
  children,
  queryData,
}: Props): React.ReactElement => {
  const { isLoading, isError, data } = queryData;

  if (isLoading) return <>{loadingComponent}</>;
  else if (isError) return <>{errorComponent}</>;
  else if (data !== null) return children();
  return <></>;
};
