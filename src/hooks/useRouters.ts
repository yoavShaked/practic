import { useQuery } from "@tanstack/react-query";
import { routersApi } from "../config";
import axios from "axios";
import { Router } from "../types/Router";

const queryFn = (): Promise<ReadonlyArray<Router>> =>
  axios.get<Array<Router>>(routersApi).then(({ data }) => data) as Promise<
    ReadonlyArray<Router>
  >;

const options = {
  initialData: [],
  queryKey: ["routers"],
  queryFn,
};

export const useRouters = () => useQuery(options);
