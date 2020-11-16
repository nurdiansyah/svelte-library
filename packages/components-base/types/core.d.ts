export type Position = "top" | "left" | "right" | "bottom";
export type OnEvent = ((e?: Event) => void) | undefined;
export type OnKeydownEvent = ((e: KeyboardEvent) => void) | undefined;
