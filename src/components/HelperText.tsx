import classNames from "classnames";
import type { ReactNode } from "react";
import { Typography } from "./Typography";

export interface HelperTextProps {
  text: string;
  error?: boolean;
  disabled?: boolean;
  slot?: { left?: ReactNode; right?: ReactNode };
}

/** Primary UI component for user interaction */
export const HelperText = ({
  text,
  error,
  disabled,
  slot,
}: HelperTextProps) => {
  return (
    <div className="flex gap-1">
      {slot?.left}
      <Typography
        variant="caption"
        disabled={disabled}
        className={classNames({ "text-red-500": error })}
      >
        {text}
      </Typography>
      {slot?.right}
    </div>
  );
};
