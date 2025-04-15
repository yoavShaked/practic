import { RouterBase } from "./RouterBase";
import { RouterType } from "./RouterType";

export interface EnterpriseRouter extends RouterBase {
  readonly portCount: number;
  readonly supportedProtocols: ReadonlyArray<string>;
  readonly throughputGbps: number;
  readonly type: RouterType.enterprise;
}
