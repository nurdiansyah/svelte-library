import type { SvelteComponent } from "svelte/internal";
import type { AvatarProps } from "./avatar";

export interface DataItem extends ListItemProps {
  dataList?: DataList;
}

export interface ListItemProps {
  divider: boolean;
  component?: typeof SvelteComponent;
  label?: string;
  subLabel?: string;
  disabled: boolean;
  selected: boolean;
  href?: string;
  icon?: typeof SvelteComponent;
  iconProps?: Record<string, any>;
  avatar?: string | AvatarProps;
  secondaryAction?: typeof SvelteComponent;
  dataItem?: DataItem;
  autofocus: boolean;
  dense: boolean;
  disableGutter: boolean;
  button: boolean;
  alignItems: "flex-start" | "center";
  labelInset: boolean;
}

export declare type DataList = DataItem[];
