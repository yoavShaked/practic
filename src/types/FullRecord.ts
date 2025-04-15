import { Field } from "./Field";

export interface FullRecord {
  readonly fields: ReadonlyArray<Field>;
  readonly backgorundColor: string;
  readonly borderColor: string;
}
