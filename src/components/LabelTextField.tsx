import type { ReactNode } from "react";
import { HelperText } from "./HelperText";
import type { InputProps } from "./Input";
import { InputLabel } from "./InputLabel";
import type { LabelTextProps } from "./LabelText";
import { WrapperInput, type WrapperInputProps } from "./WrapperInput";

export interface LabelTextFieldProps {
  label: string;
  value?: string;
  helperText?: string;
  size?: "md" | "lg"; // TODO
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  state?: "focus" | "hover" | "active"; // TODO
  swap?: { wrapperInput?: ReactNode };
  nestedProps?: {
    labelTextProps?: LabelTextProps;
    wrapperInputProps?: WrapperInputProps;
    inputProps?: InputProps;
  };
  slot?: { left?: ReactNode; right?: ReactNode };
}

/** Primary UI component for user interaction */
export const LabelTextField = ({
  label,
  value,
  helperText,
  size = "md",
  disabled,
  readOnly,
  error,
  state,
  swap,
  nestedProps,
  slot,
}: LabelTextFieldProps) => {
  return (
    <div className="flex">
      {slot?.left}
      <div>
        {label && (
          <InputLabel
            text={label}
            {...nestedProps?.labelTextProps}
            {...{ size, disabled, readOnly, error, state }}
          />
        )}
        {swap?.wrapperInput ?? (
          <WrapperInput
            value={value}
            {...nestedProps?.wrapperInputProps}
            {...{ size, disabled, readOnly, error, state }}
          />
        )}
        {!!helperText && (
          <HelperText
            text={helperText}
            {...{ size, disabled, readOnly, error, state }}
          />
        )}
      </div>
      {slot?.right}
    </div>
  );
};
