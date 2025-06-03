import classNames from "classnames";
import type { ReactNode } from "react";

export interface IconHelperTextProps {
  icon: ReactNode;
  label: string;
  color?: string;
  size?: "small" | "medium" | "large";
}

/** Primary UI component for user interaction */
export const IconHelperText = ({
  icon,
  color = "#929292",
  size = "medium",
  label,
  ...props
}: IconHelperTextProps) => {
  return (
    <p
      className={classNames(
        "flex gap-1",
        { "text-sm": size === "small" },
        { "text-md": size === "medium" },
        { "text-lg": size === "large" }
      )}
      style={{ color }}
      {...props}
    >
      {icon}
      {label}
    </p>
  );
};
