import { get, Readable } from "svelte/store";
import { FormStore } from "../FormStore";

describe("FormStore", () => {
  it("check: instance default", () => {
    const formStore = new FormStore();
    expect(get(formStore.isTouched())).toBeFalsy();
  });

  it("check: error", () => {
    const formStore = new FormStore();
    formStore.updateField({
      name: "username"
    });
    const errors: Readable<string[]> = formStore.getErrors();
    formStore.setError("username", "is required");
    expect(get<string[], Readable<string[]>>(errors).length).toBe(1);
  });

  it("check: value", () => {
    const formStore = new FormStore();
    formStore.updateField({
      name: "username"
    });
    formStore.setValue("username", "foo");
    // @ts-ignore
    expect(get(formStore.getField("username")).value).toBe("foo");
  });

  it("check: touch", () => {
    const formStore = new FormStore([
      {
        name: "username"
      }
    ]);
    expect(get<boolean, Readable<boolean>>(formStore.isTouched())).toBeFalsy();
    formStore.setTouch("username");
    expect(get<boolean, Readable<boolean>>(formStore.isTouched())).toBeTruthy();
  });
});
