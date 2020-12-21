import { FormStore } from "./";

export interface FormContext {
  formStore: FormStore;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnMount?: boolean;
}
