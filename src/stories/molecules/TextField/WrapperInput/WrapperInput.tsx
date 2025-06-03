import type { ElementType } from "react";
import { Input, type InputProps } from "../../../atoms/Input/Input";

export interface WrapperInputProps {
  nestedInputProps?: InputProps;
  Wrapper?: ElementType;
}

/** Primary UI component for user interaction */
export const WrapperInput = ({
  nestedInputProps,
  Wrapper,
  ...props
}: WrapperInputProps) =>
  Wrapper ? (
    <Wrapper {...props}>
      <Input {...nestedInputProps} />
    </Wrapper>
  ) : (
    <Input {...nestedInputProps} />
  );
