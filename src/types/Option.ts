import React from "react";

export interface Option<Id extends string = string> {
  readonly id: Id;
  readonly value: React.ReactNode;
}
