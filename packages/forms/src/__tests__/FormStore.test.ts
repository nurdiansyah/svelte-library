import type { FieldErrors } from "../FormStore";

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
    const errors: Readable<FieldErrors[]> = formStore.getErrorStore();
    formStore.setError("username", ["is required"]);
    expect(get<FieldErrors[]>(errors).length).toBe(1);
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
  describe("validation", () => {
    const loginFetch = jest.fn(async () => Promise.resolve().then(() => true));

    it("check: error validation", async (done) => {
      const expectUserError = {
        name: "username",
        errors: ["required"]
      };
      const expectPasswordError = {
        name: "password",
        errors: ["required"]
      };
      const userValidate = Promise.reject(expectUserError);

      const passValidate = Promise.reject(expectPasswordError);
      const fieldStates = [
        {
          name: "username",
          validate: async (value: string) => {
            await userValidate;
          }
        },
        {
          name: "password",
          validate: async (value) => {
            await passValidate;
          }
        }
      ];
      const formStore = new FormStore({ initial: fieldStates });
      const usernameInput = formStore.handleInput("username", { type: "input" });
      const passwordInput = formStore.handleInput("password", { type: "password" });
      usernameInput(null);
      passwordInput(null);
      const submitResult = formStore.submit(() => {
        return loginFetch();
      });
      submitResult.then((value) => {
        expect(formStore.getErrors()).toEqual([expectUserError, expectPasswordError]);
        done();
      });
    });
  });
});
