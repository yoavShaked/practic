import { RouterBase } from "./RouterBase";
import { RouterType } from "./RouterType";

export interface WifiRouter extends RouterBase {
  readonly wifiChannels: ReadonlyArray<number>;
  readonly supportsDualBand: boolean;
  readonly type: RouterType.wifi;
}
