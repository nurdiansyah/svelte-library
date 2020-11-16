import { setContext as svelteSetContext, getContext as svelteGetContext } from "svelte";
import { Writable, writable } from "svelte/store";

type Context = {
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  hiddenLabel: boolean;
  margin: "dense" | "none" | "normal";
  size: "medium" | "small" | undefined;
  required: boolean;
  variant: "filled" | "outlined" | "standard";
  adornedStart: boolean;
  focused: boolean;
  onBlur: (() => void) | undefined;
  onEmpty: (() => void) | undefined;
  onFilled: (() => void) | undefined;
  onFocus: (() => void) | undefined;
};

const key = {};

export const setContext = (context: Context) => {
  const state = writable<Context>(context);
  return svelteSetContext(key, state);
};

export const getContext = () => svelteGetContext<Writable<Context>>(key);
