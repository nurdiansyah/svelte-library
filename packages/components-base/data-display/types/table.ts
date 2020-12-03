export interface TableProps extends Partial<HTMLTableElement> {
  containerDisabled: boolean;
  headerSticky: boolean;
  size: "small" | "medium";
}

export interface TableRowProps extends Partial<HTMLTableRowElement> {
  hover: boolean;
  selected: boolean;
}

export interface TdProps extends Partial<HTMLTableCellElement> {
  align: "center" | "inherit" | "justify" | "right" | "left";
  padding: "default" | "checkbox" | "none";
}

export interface ThProps extends Partial<TdProps> {
  active: boolean;
  hideSortIcon?: boolean;
  sortable: boolean;
  sortDirection?: "ascending" | "descending";
  scope?: string;
}

export interface TableHeadCell {
  column: string;
  thProps: ThProps;
  label: string;
  sortable: boolean;
}

export interface TableHeaderProps extends Partial<HTMLTableHeaderCellElement> {
  onSelectAll?: (event: MouseEvent) => void;
  sortDirection?: "ascending" | "descending";
  keySortSelect?: string;
  numSelected: number;
  rowCount: number;
  onRequestSort?: (event: MouseEvent, property: { keySort: string }) => void;
  headCells: TableHeadCell[];
}
