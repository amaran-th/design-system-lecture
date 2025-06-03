import classNames from "classnames";

export interface HelperTextProps {
  label: string;
  color?: string;
  size?: "small" | "medium" | "large";
}

/** Primary UI component for user interaction */
export const HelperText = ({
  color = "#929292",
  size = "medium",
  label,
  ...props
}: HelperTextProps) => {
  return (
    <p
      className={classNames(
        { "text-sm": size === "small" },
        { "text-md": size === "medium" },
        { "text-lg": size === "large" }
      )}
      style={{ color }}
      {...props}
    >
      {label}
    </p>
  );
};
