import { derived, Readable, writable, get, Writable } from "svelte/store";
import type { ValidationError } from "yup";
// validate function dengan pengembalian void dan apabila terjadi error akan terjadi throw
type Validate = (value: any) => void;
export type Validators =
  | {
      name: string;
      validate?: Validate;
    }
  | Validate;
export type Errors = { name: string; errors: string[] };
export type Values = { name: string; value: any };
export type Touched = { name: string; touched: boolean };

export type FieldState = {
  name: string;
  errors?: string[];
  value?: any;
  touched?: boolean;
  validate?: Validate;
};

export interface Options {
  initial?: FieldState[];
  validators?: Validators | Validators[];
  isSubmitting?: boolean;
  isValidating?: boolean;
  submitCount?: number;
  status?: any;
}

export class FormStore {
  private fieldsStore = writable<FieldState[]>([]);
  private validatorsStore: Writable<Validators[]> = writable<Validators[]>([]);
  private readonly fieldsDefault: FieldState[];
  private status: any;
  submitCount: number = 0;
  submitFailedCount: number = 0;
  isValidating: boolean = false;
  isSubmitting: boolean = false;

  constructor({ initial, validators, isSubmitting, isValidating, submitCount, status }: Options = {}) {
    this.fieldsDefault = initial || [];
    this.resetForm();
  }

  resetForm({ initial, validators, isSubmitting, isValidating, submitCount, status }: Options = {}) {
    this.fieldsStore.set(initial || this.fieldsDefault);
    validators && this.setValidators(validators);
    this.isSubmitting = isSubmitting || false;
    this.isValidating = isValidating || false;
    this.submitCount = submitCount || 0;
    this.status = status;
  }

  validateField(fieldName: string, value: any) {
    try {
      const validate = this.getValidate(fieldName);
      validate && validate(value);
    } catch (e) {
      if (e.errors as ValidationError) {
        this.setError(fieldName, e.errors);
      }
    }
  }

  validate() {
    const errors: Errors[] = [];
    const values = this.getValues();
    const validators = this.getValidators();
    validators.forEach((v) => {
      try {
        if (typeof v === "function") {
          v(values);
        } else if (v.validate) {
          v.validate(values[v.name]);
        }
      } catch (e) {
        if (e.errors) {
          const name: string = v.name || e.path;
          errors.push({ name, errors: e.errors });
        }
      }
    });
    if (errors.length > 0) {
      this.submitFailedCount += 1;
      this.isSubmitting = false;
      this.setErrors(errors);
    }
    this.isValidating = false;
  }

  async submit(onSubmit?: () => Promise<void>) {
    this.submitCount += 1;
    this.isSubmitting = true;
    this.isValidating = true;
    this.setTouch();
    this.validate();
    if (onSubmit) {
      await onSubmit();
    }
  }

  createField(fieldState: FieldState) {
    this.setField(fieldState);
    this.addValidator({ name: fieldState.name, validate: fieldState.validate });
    delete fieldState.validate;
  }

  setField(fieldState: Omit<FieldState, "validate">) {
    this.fieldsStore.update((m) => {
      const index = m.findIndex((fs) => fs.name === fieldState.name);
      if (index !== -1) {
        m[index] = { ...m[index], ...fieldState };
      } else {
        m.push(fieldState);
      }
      return m;
    });
  }

  getFieldsState(): FieldState[] {
    return get(this.fieldsStore);
  }

  getFieldsStore() {
    return this.fieldsStore;
  }

  getField(fieldName: string) {
    return derived(this.fieldsStore, (fields) => fields.find((value) => value.name === fieldName));
  }

  setValue(fieldName: string, value: any) {
    this.fieldsStore.update((s) => {
      const field = s.find((f) => f.name === fieldName);
      if (field) {
        field.value = value;
      }
      return s;
    });
  }

  getValues(): Values[] {
    const fieldsState = this.getFieldsState();
    return fieldsState.map((s) => ({ name: s.name, value: s.value }));
  }

  setTouch(fieldName?: string) {
    this.fieldsStore.update((s) => {
      for (const field of s) {
        if (!fieldName) {
          // set touch all field
          field.touched = true;
        } else {
          // set touch per field
          if (fieldName === field.name) {
            field.touched = true;
          }
        }
      }
      const field = s.find((f) => f.name === fieldName);
      if (field) {
        field.touched = true;
      }
      return s;
    });
  }

  setError(fieldName: string, msgError: string[]) {
    this.fieldsStore.update((s) => {
      const field = s.find((f) => f.name === fieldName);
      if (field) {
        field.errors = msgError;
      }
      return s;
    });
  }

  setErrors(errors: Errors[]) {
    this.fieldsStore.update((s) => {
      s.forEach((f) => {
        const findError = errors.find((e) => f.name === e.name);
        if (findError) {
          f.errors = findError.errors;
        } else {
          delete f.errors;
        }
      });
      return s;
    });
  }

  getErrors(): Errors[] {
    return get(this.getErrorStore());
  }

  getErrorStore(): Readable<Errors[]> {
    return derived(this.fieldsStore, (fields) => {
      const errors: Errors[] = [];
      for (const field of fields) {
        if (field.errors) {
          errors.push({ name: field.name, errors: field.errors });
        }
      }
      return errors;
    });
  }

  removeError(fieldName: string) {
    this.fieldsStore.update((_fields) => _fields.filter((_field) => _field.name !== fieldName));
  }

  isTouched(): Readable<boolean> {
    return derived(this.fieldsStore, (fields) => fields.findIndex((v) => !!v.touched) !== -1);
  }

  getStatus(): any {
    return this.status;
  }

  setStatus(value: any) {
    this.status = value;
  }

  getValidate(fieldName: string): Validate | undefined {
    const validators = this.getValidators();
    for (const validator of validators) {
      if (typeof validator === "object" && validator.name === fieldName) {
        return validator.validate;
      }
    }
  }

  getValidators(): Validators[] {
    return get(this.getValidatorsStore());
  }

  getValidatorsStore() {
    return this.validatorsStore;
  }

  setValidators(validators: (Validators | Validate)[] | Validators | Validate) {
    const _validators = Array.isArray(validators) ? validators : [validators];
    this.validatorsStore.set(_validators);
  }

  addValidator(validator: Validators | Validate) {
    this.validatorsStore.update((v) => {
      if (typeof validator === "object" && validator.name) {
        for (const vv of v) {
          if (typeof vv === "object" && vv.name) {
            vv.validate = validator.validate;
            return v;
          }
        }
      }
      return [...v, validator];
    });
  }
}
