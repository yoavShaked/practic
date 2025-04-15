import { RouterBase } from "./RouterBase";
import { RouterType } from "./RouterType";

export interface HomeRouter extends RouterBase {
  readonly connectedDevices: number;
  readonly parentalControlsEnabled: boolean;
  readonly maxBandwidthMbps: number;
  readonly type: RouterType.home;
}
