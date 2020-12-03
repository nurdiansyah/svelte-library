type Color = "primary" | "secondary";

export interface InputProps extends Partial<Omit<HTMLInputElement, "size" | "select" | "textContent">> {
  color?: Color;
  error?: boolean;
  focused?: boolean;
  fullWidth?: boolean;
  inputProps?: Record<string, any>;
  labelOutlined?: string; // label input outline
  margin?: "dense";
  multiline?: boolean;
  name: string;
  plaintText?: boolean;
  required?: boolean;
  rows?: number | string;
  rowsMax?: number | string;
  underlineDisable?: boolean;
  variant?: "filled" | "outlined" | "standard";
}

export interface InputCheckProps extends Partial<Omit<HTMLInputElement, "check" | "size">> {
  checked: boolean;
  focused: boolean;
  size?: "small";
  type: "checkbox" | "radio";
}

export interface LabelProps extends Partial<HTMLLabelElement> {
  htmlFor: string;
  color?: Color;
  disabled: boolean;
  focused: boolean;
  error?: boolean;
  required: boolean;
  label?: string;
  placement: "start" | "top" | "bottom" | "end";
}

export type TextFieldProps = InputProps & {
  disableAnimated: boolean;
  error: boolean;
  helperText?: string;
  label?: string;
  labelShrink: boolean;
  multiline: boolean;
  select: boolean;
  size?: "sm" | "lg";
};
