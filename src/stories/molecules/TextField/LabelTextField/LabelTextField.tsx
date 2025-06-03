import type { ElementType, ReactNode } from "react";
import {
  HelperText,
  type HelperTextProps,
} from "../../../atoms/HelperText/HelperText";
import type { InputProps } from "../../../atoms/Input/Input";
import { InputLabel, type InputLabelProps } from "../InputLabel/InputLabel";
import { TextField, type TextFieldProps } from "../TextField";

export interface LabelTextFieldProps {
  value?: string;
  slot?: { left?: ReactNode; right?: ReactNode };
  Wrapper?: ElementType;
  inputProps?: InputProps;
  textFieldProps?: TextFieldProps;
  inputLabelProps?: InputLabelProps;
  helperTextProps?: HelperTextProps;
  label?: string;
  helperText?: string;
  size?: "small" | "medium" | "large";
  diabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  state?: "focus" | "hover" | "active";
  // style
}

/** Primary UI component for user interaction */
export const LabelTextField = ({
  value,
  Wrapper = "div",
  textFieldProps,
  inputProps,
  inputLabelProps,
  helperTextProps,
  label,
  helperText,
  error,
}: LabelTextFieldProps) => {
  return (
    <Wrapper>
      {label && <InputLabel label={label} {...inputLabelProps} />}
      <TextField value={value} inputProps={inputProps} {...textFieldProps} />
      {!!helperText && (
        <HelperText
          label={helperText}
          color={error ? "red" : undefined}
          {...helperTextProps}
        />
      )}
    </Wrapper>
  );
};
