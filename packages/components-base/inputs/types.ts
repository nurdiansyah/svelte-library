type Color = "primary" | "secondary";

export interface InputProps extends Partial<Omit<HTMLInputElement, "size" | "select">> {
  color?: Color;
  focused?: boolean;
  fullWidth?: boolean;
  inputProps?: Partial<HTMLInputElement>;
  labelOutlined?: string; // label input outline
  margin?: "dense";
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
  color?: Color;
  disabled: boolean;
  focused: boolean;
  error?: boolean;
  required: boolean;
  label?: string;
  placement: "start" | "top" | "bottom" | "end";
}

export type TextFieldProps = InputProps & {
  error: boolean;
  helperText?: string;
  label?: string;
  multiline: boolean;
  select: boolean;
  size?: "sm" | "lg";
};
