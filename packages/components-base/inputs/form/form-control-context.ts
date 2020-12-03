import { setContext as svelteSetContext, getContext as svelteGetContext } from "svelte";
import { Writable, writable } from "svelte/store";

type State = {
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
  filled: boolean;
};

type Context = {
  state: Writable<Partial<State>>;
  value?: Writable<any>;
  onBlur?: (() => void) | undefined;
  onEmpty?: (() => void) | undefined;
  onFilled?: (() => void) | undefined;
  onFocus?: (() => void) | undefined;
};

const key = {};

export const setFormControlContext = (
  context: Partial<Context> = {},
  initial: Partial<State> = {}
) => {
  const state = writable<Partial<State>>(initial);
  svelteSetContext<Context>(key, { ...context, ...{ state } });
  return state;
};

export const getFormControl = () => svelteGetContext<Context>(key);

export const updateFormControlState = (state: Partial<State>) =>
  getFormControl().state.update((s) => ({ ...s, ...state }));
