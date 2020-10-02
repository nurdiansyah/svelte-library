"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOpen = exports.isActive = exports.setItemActive = exports.setActive = exports.dropdownStore = void 0;
const store_1 = require("svelte/store");
exports.dropdownStore = store_1.writable({});
exports.setActive = () => exports.dropdownStore.update((value) => {
    value.active = true;
    return value;
});
exports.setItemActive = (active) => exports.dropdownStore.update((value) => {
    value.itemActive = active;
    return value;
});
exports.isActive = store_1.derived(exports.dropdownStore, (values) => values.active);
exports.isOpen = store_1.derived(exports.dropdownStore, (values) => values.open);
