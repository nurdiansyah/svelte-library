export interface ItemProps {
  disabled?: boolean;
  selected?: boolean;
  href?: string;
}

export interface DataItem {
  type: "divider" | "item" | "list";
  value?: any;
  name?: string;
  props?: ItemProps;
  dataList?: DataList;
}

export declare type DataList = DataItem[];
