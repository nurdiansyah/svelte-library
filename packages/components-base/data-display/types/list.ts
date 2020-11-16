import type { SvelteComponent } from "svelte/internal";

export interface AvatarProps {
  alt?: string;
  variant?: "circle" | "rounded" | "square";
  src?: string;
  srcSet?: string;
  imgProps?: Record<string, any>;
}

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
  icon?: SvelteComponent;
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
