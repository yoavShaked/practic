import { Coordinate } from "./Coordinate";
import { RouterType } from "./RouterType";

export interface RouterBase {
  readonly id: string;
  readonly name: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly coordinates: Coordinate;
  readonly type: RouterType;
}
