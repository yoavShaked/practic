import { HomeRouter } from "./HomeRouter";
import { EnterpriseRouter } from "./EnterpriseRouter";
import { WifiRouter } from "./WifiRouter";
import { RouterBase } from "./RouterBase";

export type Router = WifiRouter | EnterpriseRouter | HomeRouter;

export type SortRouterType = keyof Pick<
  RouterBase,
  "updatedAt" | "name" | "type"
>;
