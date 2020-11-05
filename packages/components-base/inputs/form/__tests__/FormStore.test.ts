import type { Errors } from "../FormStore";

import { FormStore } from "../FormStore";
import { get, Readable } from "svelte/store";

describe("FormStore", () => {
  it("check: instance default", () => {
    const formStore = new FormStore();
    expect(get(formStore.isTouched())).toBeFalsy();
  });

  it("check: error", () => {
    const formStore = new FormStore();
    formStore.createField({
      name: "username"
    });
    const errors: Readable<Errors[]> = formStore.getErrorStore();
    formStore.setError("username", ["is required"]);
    expect(get<Errors[]>(errors).length).toBe(1);
  });

  it("check: value", () => {
    const formStore = new FormStore();
    formStore.createField({
      name: "username"
    });
    formStore.setValue("username", "foo");
    // @ts-ignore
    expect(get(formStore.getField("username")).value).toBe("foo");
  });

  it("check: touch", () => {
    const formStore = new FormStore({
      initial: [
        {
          name: "username"
        }
      ]
    });
    expect(get<boolean>(formStore.isTouched())).toBeFalsy();
    formStore.setTouch("username");
    expect(get<boolean>(formStore.isTouched())).toBeTruthy();
  });
});
