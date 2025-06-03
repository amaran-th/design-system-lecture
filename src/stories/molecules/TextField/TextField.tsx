import type { ElementType, ReactNode } from "react";
import { type InputProps } from "../../atoms/Input/Input";
import { WrapperInput } from "./WrapperInput/WrapperInput";

export interface TextFieldProps {
  value?: string;
  slot?: { left?: ReactNode; right?: ReactNode };
  Wrapper?: ElementType;
  inputProps?: InputProps;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  state?: "focus" | "hover" | "active";
  // style
}

/** Primary UI component for user interaction */
export const TextField = ({
  value,
  slot,
  Wrapper = "div",
  inputProps,
  disabled = false,
  readOnly = false,
}: // style
TextFieldProps) => {
  return (
    <div className="flex">
      {slot?.right}
      <WrapperInput
        Wrapper={Wrapper}
        value={value}
        fullWidth
        disabled={disabled}
        readOnly={readOnly}
        {...inputProps}
      />
      {slot?.right}
    </div>
  );
};
