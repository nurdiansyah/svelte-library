import { writable, derived } from "svelte/store";

type DropdownStore = {
  active?: boolean;
  open?: boolean;
  itemActive?: boolean;
  direction?: "left" | "up" | "right";
  toggle?: Function;
};

export const dropdownStore = writable<DropdownStore>({});

export const setActive = () =>
  dropdownStore.update((value) => {
    value.active = true;
    return value;
  });

export const setItemActive = (active: boolean) =>
  dropdownStore.update((value) => {
    value.itemActive = active;
    return value;
  });

export const isActive = derived(dropdownStore, (values) => values.active);
export const isOpen = derived(dropdownStore, (values) => values.open);
