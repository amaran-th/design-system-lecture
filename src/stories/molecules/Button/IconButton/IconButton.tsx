import classNames from "classnames";
import type { ReactNode } from "react";

export interface IconButtonProps {
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  icon: ReactNode;
  label?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const IconButton = ({
  size = "medium",
  backgroundColor,
  icon,
  label,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        { "text-sm": size === "small" },
        { "text-md": size === "medium" },
        { "text-lg": size === "large" },
        "flex gap-1"
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};
