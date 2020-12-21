import { derived, writable, get, Writable } from "svelte/store";
// validate function dengan pengembalian void dan apabila terjadi error akan terjadi throw
export type Validate = (value: any) => Promise<any>;
type SchemaValidation = {
  validate(value: any): boolean;
};

export type Validators =
  | {
      name: string;
      validate?: Validate;
    }
  | Validate;

export type Values = { name: string; value: any };
export type Touched = { name: string; touched: boolean };

export type FieldState = {
  errors?: string[];
  value?: any;
  touched?: boolean;
  validate?: Validate;
};

export type FieldStore = Writable<FieldState>;

export type Fields = Record<string, FieldState>;
export type FieldsStore = Record<string, Writable<FieldState>>;

export interface Options {
  initial?: Fields;
  schemaValidation?: SchemaValidation;
  isSubmitting?: boolean;
  isValidating?: boolean;
  submitCount?: number;
  status?: any;
}

export class FormStore {
  private fields: FieldsStore = {};
  private schemaValidation?: SchemaValidation;
  private readonly fieldsDefault: Fields;
  private status: any;
  private isValidating: boolean = false;
  submitCount: number = 0;
  submitFailedCount: number = 0;
  submitSuccessCount: number = 0;
  isSubmitting: boolean = false;

  constructor({ initial, schemaValidation, isSubmitting, isValidating, submitCount, status }: Options = {}) {
    this.fieldsDefault = initial || {};
    this.schemaValidation = schemaValidation;
    this.resetForm();
  }

  resetForm({ initial, schemaValidation, isSubmitting, isValidating, submitCount, status }: Options = {}) {
    this.fillToFieldsStore(this.fieldsDefault);
    this.isSubmitting = isSubmitting || false;
    this.isValidating = isValidating || false;
    this.submitCount = submitCount || 0;
    this.status = status;
  }

  async validate() {
    let _haveError = false;
    for (const _fieldName of Object.keys(this.fields)) {
      const fieldState = get(this.getFieldStore(_fieldName));
      if (fieldState.validate) {
        try {
          await fieldState.validate(fieldState.value);
        } catch (e) {
          if (e.errors) {
            fieldState.errors = e.errors;
            this.updateField(_fieldName, fieldState);
            _haveError = true;
          }
        }
      }
    }

    if (_haveError) {
      this.submitFailed();
    }
    this.isValidating = false;
    return !_haveError;
  }

  async submit(onSubmit?: () => Promise<any>) {
    this.submitCount++;
    this.isSubmitting = true;
    this.isValidating = true;
    this.setTouch();
    const isValid = await this.validate();
    if (isValid && onSubmit) {
      const result = await onSubmit();
      if (result && typeof result.then === "function") {
        return Promise.resolve(result)
          .then(() => {
            this.isSubmitting = false;
            this.submitSuccessCount++;
          })
          .catch(() => {
            this.submitFailed();
          });
      }
    } else {
      this.submitFailed();
    }
  }

  addField(fieldName: string, fieldState: FieldState) {
    this.fieldsDefault[fieldName] = fieldState;
    this.fields[fieldName] = writable(fieldState);
  }

  addFieldStore(fieldName: string, fieldStore: FieldStore) {
    this.fieldsDefault[fieldName] = get(fieldStore);
    this.fields[fieldName] = fieldStore;
  }

  updateField(fieldName: string, fieldState: Partial<FieldState>) {
    const fieldStore = this.fields[fieldName];
    fieldStore.update((_fs) => ({ ..._fs, ...fieldState }));
  }

  removeField(fieldName: string) {
    delete this.fieldsDefault[fieldName];
    delete this.fields[fieldName];
  }

  handleInput(fieldName, { type }: { type?: string } = {}) {
    return (e: any) => {
      if (e?.target) {
        const value = type?.match(/^(number|range)$/) ? +e.target?.value : e.target?.value;
        this.setValue(fieldName, value);
      } else {
        this.setValue(fieldName, undefined);
      }
    };
  }

  getFieldState(fieldName: string): FieldState {
    return get(this.getFieldStore(fieldName));
  }

  getFields() {
    return this.fields;
  }

  getFieldStore(fieldName: string): Writable<FieldState> {
    return this.fields[fieldName];
  }

  setValue(fieldName: string, value: any) {
    this.updateField(fieldName, { value });
  }

  getValue(fieldName: string) {
    return derived(this.getFieldStore(fieldName), (_fs) => _fs?.value || "");
  }

  getValues(): Values[] {
    return Object.keys(this.fields).map((_fieldName) => {
      const fieldState = get(this.fields[_fieldName]);
      return { name: _fieldName, value: fieldState.value };
    });
  }

  setTouch(fieldName?: string) {
    if (fieldName) {
      this.updateField(fieldName, { touched: true });
    }
    Object.keys(this.fields).forEach((_fieldName) => {
      this.updateField(_fieldName, { touched: true });
    });
  }

  setError(fieldName: string, msgError: string[]) {
    const fieldState = this.getFieldStore(fieldName);
    fieldState.update((_fs) => {
      let errors: string[];
      if (_fs.errors) {
        errors = [..._fs.errors, ...msgError];
      } else {
        errors = msgError;
      }
      return { ..._fs, ...{ errors } };
    });
  }

  setErrors(errors: Record<string, string[]>) {
    Object.keys(errors).forEach((_fieldName) => {
      this.setError(_fieldName, errors[_fieldName]);
    });
  }

  getErrors(): [string, string[]][] {
    return Object.keys(this.fields).reduce<[string, string[]][]>((_result, _fieldName) => {
      const _errors = get(this.getFieldStore(_fieldName)).errors;
      if (_errors) {
        _result.push([_fieldName, _errors]);
      }
      return _result;
    }, []);
  }

  removeError(fieldName: string) {
    this.updateField(fieldName, { errors: [] });
  }

  isTouched(): boolean {
    return Object.keys(this.fields).some((_fieldName) => {
      return get(this.getFieldStore(_fieldName)).touched || false;
    });
  }

  getStatus(): any {
    return this.status;
  }

  setStatus(value: any) {
    this.status = value;
  }

  private fillToFieldsStore(fields: Fields) {
    Object.keys(fields).forEach((key) => (this.fields[key] = writable(fields[key])));
  }

  private submitFailed() {
    this.isSubmitting = false;
    this.submitFailedCount++;
  }
}
