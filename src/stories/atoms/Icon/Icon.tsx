import classNames from "classnames";

export interface IconProps {
  color?: string;
  size?: "small" | "medium" | "large";
}

/** Primary UI component for user interaction */
export const Icon = ({
  color = "inherit",
  size = "medium",
  ...props
}: IconProps) => {
  return (
    <div
      className={classNames({
        "text-sm": size === "small",
        "text-md": size === "medium",
        "text-lg": size === "large",
      })}
      style={{ color }}
      {...props}
    >
      +
    </div>
  );
};
