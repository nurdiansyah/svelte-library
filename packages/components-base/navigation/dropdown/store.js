import { writable, derived } from "svelte/store";
export const dropdownStore = writable({});
export const setActive = () => dropdownStore.update((value) => {
    value.active = true;
    return value;
});
export const setItemActive = (active) => dropdownStore.update((value) => {
    value.itemActive = active;
    return value;
});
export const isActive = derived(dropdownStore, (values) => values.active);
export const isOpen = derived(dropdownStore, (values) => values.open);
