/** Primary UI component for user interaction */
import classNames from "classnames";

export interface LabelTextProps {
  label: string;
  size?: "small" | "medium" | "large";
}

/** Primary UI component for user interaction */
export const LabelText = ({
  label,
  size = "medium",
  ...props
}: LabelTextProps) => {
  return (
    <p
      className={classNames(
        { "text-sm": size === "small" },
        { "text-md": size === "medium" },
        { "text-lg": size === "large" }
      )}
      {...props}
    >
      {label}
    </p>
  );
};
