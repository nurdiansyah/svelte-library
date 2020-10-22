import { derived, Readable, writable, get } from "svelte/store";

type Validator = () => boolean;
export type Validators = Record<string, Validator>;
export type Errors = Record<string, string>;
export type Values = Record<string, any>;
export type Touched = Record<string, boolean>;
export type Warning = Record<string, any>;

export type FieldState = {
  name: string;
  error?: string;
  value?: any;
  touched?: boolean;
  warning?: boolean;
};

export class FormStore {
  fieldsStore = writable<FieldState[]>([]);
  fieldsDefault: FieldState[];

  constructor(fields: FieldState[] = []) {
    this.fieldsDefault = fields;
    this.resetForm();
  }

  resetForm() {
    this.fieldsStore.set(this.fieldsDefault);
  }

  updateField(fieldState: FieldState) {
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

  setWarning(fieldName: string) {
    this.fieldsStore.update((s) => {
      const field = s.find((f) => f.name === fieldName);
      if (field) {
        field.warning = true;
      }
      return s;
    });
  }

  setTouch(fieldName: string) {
    this.fieldsStore.update((s) => {
      const field = s.find((f) => f.name === fieldName);
      if (field) {
        field.touched = true;
      }
      return s;
    });
  }

  setError(fieldName: string, msgError: string) {
    this.fieldsStore.update((s) => {
      const field = s.find((f) => f.name === fieldName);
      if (field) {
        field.error = msgError;
      }
      return s;
    });
  }

  getErrors() {
    return derived(this.fieldsStore, (fields) => {
      return fields.filter((_field) => !!_field.error).map((_field) => _field.name);
    });
  }

  removeError(fieldName: string) {
    this.fieldsStore.update((_fields) => _fields.filter((_field) => _field.name !== fieldName));
  }

  isTouched(): Readable<boolean> {
    return derived(this.fieldsStore, (fields) => fields.findIndex((v) => !!v.touched) !== -1);
  }
}
