export interface AvatarProps {
  alt?: string;
  variant?: "circle" | "rounded" | "square";
  src?: string;
  srcSet?: string;
  imgProps?: Partial<HTMLImageElement>;
}
