import { get, writable, derived } from 'svelte/store';

class FormStore {
  constructor({initial, schemaValidation, isSubmitting, isValidating, submitCount, status} = {}) {
    this.fields = {};
    this.isValidating = false;
    this.submitCount = 0;
    this.submitFailedCount = 0;
    this.submitSuccessCount = 0;
    this.isSubmitting = false;
    this.fieldsDefault = initial || {};
    this.schemaValidation = schemaValidation;
    this.resetForm();
  }
  resetForm({initial, schemaValidation, isSubmitting, isValidating, submitCount, status} = {}) {
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
  async submit(onSubmit) {
    this.submitCount++;
    this.isSubmitting = true;
    this.isValidating = true;
    this.setTouch();
    const isValid = await this.validate();
    if (isValid && onSubmit) {
      const result = await onSubmit();
      if (result && typeof result.then === "function") {
        return Promise.resolve(result).then(() => {
          this.isSubmitting = false;
          this.submitSuccessCount++;
        }).catch(() => {
          this.submitFailed();
        });
      }
    } else {
      this.submitFailed();
    }
  }
  addField(fieldName, fieldState) {
    this.fieldsDefault[fieldName] = fieldState;
    this.fields[fieldName] = writable(fieldState);
  }
  addFieldStore(fieldName, fieldStore) {
    this.fieldsDefault[fieldName] = get(fieldStore);
    this.fields[fieldName] = fieldStore;
  }
  updateField(fieldName, fieldState) {
    const fieldStore = this.fields[fieldName];
    fieldStore.update((_fs) => ({..._fs, ...fieldState}));
  }
  removeField(fieldName) {
    delete this.fieldsDefault[fieldName];
    delete this.fields[fieldName];
  }
  handleInput(fieldName, {type} = {}) {
    return (e) => {
      var _a, _b;
      if (e == null ? void 0 : e.target) {
        const value = (type == null ? void 0 : type.match(/^(number|range)$/)) ? +((_a = e.target) == null ? void 0 : _a.value) : (_b = e.target) == null ? void 0 : _b.value;
        this.setValue(fieldName, value);
      } else {
        this.setValue(fieldName, void 0);
      }
    };
  }
  getFieldState(fieldName) {
    return get(this.getFieldStore(fieldName));
  }
  getFields() {
    return this.fields;
  }
  getFieldStore(fieldName) {
    return this.fields[fieldName];
  }
  setValue(fieldName, value) {
    this.updateField(fieldName, {value});
  }
  getValue(fieldName) {
    return derived(this.getFieldStore(fieldName), (_fs) => (_fs == null ? void 0 : _fs.value) || "");
  }
  getValues() {
    return Object.keys(this.fields).map((_fieldName) => {
      const fieldState = get(this.fields[_fieldName]);
      return {name: _fieldName, value: fieldState.value};
    });
  }
  setTouch(fieldName) {
    if (fieldName) {
      this.updateField(fieldName, {touched: true});
    }
    Object.keys(this.fields).forEach((_fieldName) => {
      this.updateField(_fieldName, {touched: true});
    });
  }
  setError(fieldName, msgError) {
    const fieldState = this.getFieldStore(fieldName);
    fieldState.update((_fs) => {
      let errors;
      if (_fs.errors) {
        errors = [..._fs.errors, ...msgError];
      } else {
        errors = msgError;
      }
      return {..._fs, ...{errors}};
    });
  }
  setErrors(errors) {
    Object.keys(errors).forEach((_fieldName) => {
      this.setError(_fieldName, errors[_fieldName]);
    });
  }
  getErrors() {
    return Object.keys(this.fields).reduce((_result, _fieldName) => {
      const _errors = get(this.getFieldStore(_fieldName)).errors;
      if (_errors) {
        _result.push([_fieldName, _errors]);
      }
      return _result;
    }, []);
  }
  removeError(fieldName) {
    this.updateField(fieldName, {errors: []});
  }
  isTouched() {
    return Object.keys(this.fields).some((_fieldName) => {
      return get(this.getFieldStore(_fieldName)).touched || false;
    });
  }
  getStatus() {
    return this.status;
  }
  setStatus(value) {
    this.status = value;
  }
  fillToFieldsStore(fields) {
    Object.keys(fields).forEach((key) => this.fields[key] = writable(fields[key]));
  }
  submitFailed() {
    this.isSubmitting = false;
    this.submitFailedCount++;
  }
}

export { FormStore };
//# sourceMappingURL=index.js.map
