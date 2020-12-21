"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FormStore_1 = require("../FormStore");
const store_1 = require("svelte/store");
describe("FormStore", () => {
    it("check: instance default", () => {
        const formStore = new FormStore_1.FormStore();
        expect(store_1.get(formStore.isTouched())).toBeFalsy();
    });
    it("check: error", () => {
        const formStore = new FormStore_1.FormStore();
        formStore.createField({
            name: "username"
        });
        const errors = formStore.getErrorStore();
        formStore.setError("username", ["is required"]);
        expect(store_1.get(errors).length).toBe(1);
    });
    it("check: value", () => {
        const formStore = new FormStore_1.FormStore();
        formStore.createField({
            name: "username"
        });
        formStore.setValue("username", "foo");
        // @ts-ignore
        expect(store_1.get(formStore.getField("username")).value).toBe("foo");
    });
    it("check: touch", () => {
        const formStore = new FormStore_1.FormStore({
            initial: [
                {
                    name: "username"
                }
            ]
        });
        expect(store_1.get(formStore.isTouched())).toBeFalsy();
        formStore.setTouch("username");
        expect(store_1.get(formStore.isTouched())).toBeTruthy();
    });
});
