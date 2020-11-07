type Align = "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
type Direction = "row" | "row-reverse" | "column" | "column-reverse";
type Justify = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type Wrap = "wrap" | "nowrap" | "wrap-reverse";
type ItemGrid = "auto" | boolean | number;
type Screen = "xs" | "sm" | "md" | "lg" | "xl";

export interface GripProps {
  alignContent: Align;
  alignContentLg: Align;
  alignContentMd: Align;
  alignContentSm: Align;
  alignContentXl: Align;
  alignItems: Align;
  alignItemsLg: Align;
  alignItemsMd: Align;
  alignItemsSm: Align;
  alignItemsXl: Align;
  container: boolean;
  direction: Direction;
  directionLg: Direction;
  directionMd: Direction;
  directionSm: Direction;
  directionXl: Direction;
  item: boolean;
  justify: Justify;
  justifyLg: Justify;
  justifyMd: Justify;
  justifySm: Justify;
  justifyXl: Justify;
  spacing: number;
  spacingLg: number;
  spacingMd: number;
  spacingSm: number;
  spacingXl: number;
  wrap: Wrap;
  wrapSm: Wrap;
  wrapMd: Wrap;
  wrapLg: Wrap;
  wrapXl: Wrap;
  lg: ItemGrid;
  md: ItemGrid;
  sm: ItemGrid;
  xl: ItemGrid;
  xs: ItemGrid;
  zeroMinWidth: number;
}

export interface Container {
  fixed: boolean;
  guttersDisable: boolean;
  maxWidth: Screen;
}
