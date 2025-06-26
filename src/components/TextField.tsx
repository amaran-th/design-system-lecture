import type { ReactNode } from "react";
import { Input, type InputProps } from "./Input";
import { WrapperInput, type WrapperInputProps } from "./WrapperInput";

export interface TextFieldProps {
  value?: string;
  size?: "md" | "lg"; // TODO
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  state?: "focus" | "hover" | "active"; // TODO
  swap?: { wrapperInput?: ReactNode };
  nestedProps?: {
    wrapperInputProps?: WrapperInputProps;
    inputProps?: InputProps;
  };
  slot?: { left?: ReactNode; right?: ReactNode };
}

/** Primary UI component for user interaction */
export const TextField = ({
  value,
  swap,
  nestedProps,
  slot,
  ...props
}: // style
TextFieldProps) => {
  return (
    <div className="flex items-center gap-1">
      {slot?.left}
      {swap?.wrapperInput ?? (
        <WrapperInput
          {...nestedProps?.wrapperInputProps}
          swap={{
            input: <Input value={value} {...nestedProps?.inputProps} />,
          }}
          value={value}
          {...props}
        />
      )}
      {slot?.right}
    </div>
  );
};
