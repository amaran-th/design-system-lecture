import type { ElementType, ReactNode } from "react";
import { Input, type InputProps } from "./Input";

export interface WrapperInputProps {
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  nestedProps?: { inputProps: InputProps };
  swap?: { input?: ReactNode };
  Wrapper?: ElementType;
}

/** Primary UI component for user interaction */
export const WrapperInput = ({
  value,
  nestedProps,
  swap,
  Wrapper,
  ...props
}: WrapperInputProps) =>
  Wrapper ? (
    <Wrapper {...props}>
      {swap?.input ?? (
        <Input value={value} {...nestedProps?.inputProps} {...props} />
      )}
    </Wrapper>
  ) : (
    swap?.input ?? (
      <Input value={value} {...nestedProps?.inputProps} {...props} />
    )
  );
