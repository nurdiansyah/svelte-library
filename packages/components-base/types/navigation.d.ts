import type { DataItem } from "./data-display";
import type { Position as _Position } from "./core";

export interface DataMenuItem extends DataItem {
  active?: boolean;
}
export declare type DataMenu = DataMenuItem[];

export declare type Anchor = _Position;
