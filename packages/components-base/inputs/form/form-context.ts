import { setContext as setContextSvelte, getContext as getContextSvelte } from "svelte";
import { FormStore, Options as OptionsFormStore } from "./FormStore";

interface Options extends OptionsFormStore {
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnMount?: boolean;
}
interface FormContext {
  formStore: FormStore;
}

const key = {};

export const setContext = (options: Options = {}) => {
  const formStore = new FormStore(options);
  setContextSvelte<FormContext>(key, { formStore });
};
export const getContext = () => getContextSvelte<FormContext>(key);
