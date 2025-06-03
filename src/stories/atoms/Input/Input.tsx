import classNames from "classnames";

export interface InputProps {
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  value?: string;
  fullWidth?: boolean;
}

/** Primary UI component for user interaction */
export const Input = ({
  disabled = false,
  readOnly = false,
  placeholder,
  value,
  fullWidth,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={classNames(
        { disabled: disabled },
        { "read-only": readOnly },
        { "grow w-full": fullWidth },
        "border border-gray-300 px-2 py-1 rounded-md"
      )}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
    />
  );
};
