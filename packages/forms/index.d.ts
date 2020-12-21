import { Writable, Readable } from 'svelte/store';

declare type Validate = (value: any) => Promise<any>;
declare type SchemaValidation = {
    validate(value: any): boolean;
};
declare type Validators = {
    name: string;
    validate?: Validate;
} | Validate;
declare type Values = {
    name: string;
    value: any;
};
declare type Touched = {
    name: string;
    touched: boolean;
};
declare type FieldState = {
    errors?: string[];
    value?: any;
    touched?: boolean;
    validate?: Validate;
};
declare type FieldStore = Writable<FieldState>;
declare type Fields = Record<string, FieldState>;
declare type FieldsStore = Record<string, Writable<FieldState>>;
interface Options {
    initial?: Fields;
    schemaValidation?: SchemaValidation;
    isSubmitting?: boolean;
    isValidating?: boolean;
    submitCount?: number;
    status?: any;
}
declare class FormStore {
    private fields;
    private schemaValidation?;
    private readonly fieldsDefault;
    private status;
    private isValidating;
    submitCount: number;
    submitFailedCount: number;
    submitSuccessCount: number;
    isSubmitting: boolean;
    constructor({ initial, schemaValidation, isSubmitting, isValidating, submitCount, status }?: Options);
    resetForm({ initial, schemaValidation, isSubmitting, isValidating, submitCount, status }?: Options): void;
    validate(): Promise<boolean>;
    submit(onSubmit?: () => Promise<any>): Promise<void>;
    addField(fieldName: string, fieldState: FieldState): void;
    addFieldStore(fieldName: string, fieldStore: FieldStore): void;
    updateField(fieldName: string, fieldState: Partial<FieldState>): void;
    removeField(fieldName: string): void;
    handleInput(fieldName: any, { type }?: {
        type?: string;
    }): (e: any) => void;
    getFieldState(fieldName: string): FieldState;
    getFields(): Record<string, Writable<FieldState>>;
    getFieldStore(fieldName: string): Writable<FieldState>;
    setValue(fieldName: string, value: any): void;
    getValue(fieldName: string): Readable<any>;
    getValues(): Values[];
    setTouch(fieldName?: string): void;
    setError(fieldName: string, msgError: string[]): void;
    setErrors(errors: Record<string, string[]>): void;
    getErrors(): [string, string[]][];
    removeError(fieldName: string): void;
    isTouched(): boolean;
    getStatus(): any;
    setStatus(value: any): void;
    private fillToFieldsStore;
    private submitFailed;
}

export { FieldState, FieldStore, Fields, FieldsStore, FormStore, Options, Touched, Validate, Validators, Values };
