import type { Writable } from "svelte/types/runtime/store";
export declare type Icon = string | {
    type: "url" | "font" | "fa";
    name: string;
};
export interface MenuItem {
    id: string;
    text?: string;
    label?: string;
    icon?: string | Icon;
    href?: string;
    hint?: string;
    title?: string;
    submenu?: MenuItem[];
    type?: "separator" | "section";
}
export interface LayoutStore {
    currentPath: Writable<string>;
    minSideLeft: Writable<boolean>;
}
