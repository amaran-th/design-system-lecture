import { useMemo, useState, type ElementType, type ReactNode } from "react";

import { Chip } from "./Chip";
import { Input, type InputProps } from "./Input";
import { WrapperInput, type WrapperInputProps } from "./WrapperInput";

export interface TextFieldProps {
  value?: string[];
  size?: "md" | "lg"; // TODO
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  state?: "focus" | "hover" | "active"; // TODO
  swap?: { WrapperInput?: typeof WrapperInput; Render: ElementType };
  nestedProps?: {
    wrapperInputProps?: WrapperInputProps;
    inputProps?: InputProps;
  };
  slot?: { left?: ReactNode; right?: ReactNode };
}

/** Primary UI component for user interaction */
export const TokenizedTextField = ({
  value,
  swap = { Render: Chip },
  nestedProps,
  slot,
  ...props
}: // style
TextFieldProps) => {
  const [values, setValues] = useState<string[]>(value ?? []);
  const [inputValue, setInputValue] = useState<string>("");

  const MemoizedInput = useMemo(
    () => (
      <Input
        value={inputValue}
        {...nestedProps?.inputProps}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 8 && inputValue.length === 0) {
            setInputValue(values[values.length - 1]);
            setValues((prev) =>
              prev.filter((_, index) => index !== prev.length - 1)
            );
          } else if (e.key === " ") {
            setValues((prev) => [...prev, inputValue]);
            setInputValue("");
            return;
          }
        }}
      />
    ),
    [inputValue, nestedProps?.inputProps, values]
  );
  return (
    <div className="flex items-center gap-1">
      {slot?.left}
      <div className="flex flex-wrap gap-1">
        {values.map((value) => (
          <swap.Render>{value}</swap.Render>
        ))}
        {swap?.WrapperInput ? (
          <swap.WrapperInput
            {...nestedProps?.wrapperInputProps}
            swap={{
              input: MemoizedInput,
            }}
            value={inputValue}
            {...props}
          />
        ) : (
          <WrapperInput
            {...nestedProps?.wrapperInputProps}
            swap={{
              input: MemoizedInput,
            }}
            value={inputValue}
            {...props}
          />
        )}
      </div>

      {slot?.right}
    </div>
  );
};
