declare type DropdownStore = {
    active?: boolean;
    open?: boolean;
    itemActive?: boolean;
    direction?: "left" | "up" | "right";
    toggle?: Function;
};
export declare const dropdownStore: import("svelte/store").Writable<DropdownStore>;
export declare const setActive: () => void;
export declare const setItemActive: (active: boolean) => void;
export declare const isActive: import("svelte/store").Readable<boolean | undefined>;
export declare const isOpen: import("svelte/store").Readable<boolean | undefined>;
export {};
