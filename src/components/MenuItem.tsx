import classNames from "classnames";
import type { ReactNode } from "react";

export interface MenuItemProps {
  children: ReactNode;
  slot?: { left?: ReactNode; right?: ReactNode };
  size?: "small" | "medium" | "large";
  selected?: boolean;
}

/** Primary UI component for user interaction */
export const MenuItem = ({
  children,
  slot,
  size = "medium",
  selected,
  ...props
}: MenuItemProps) => (
  <div
    className={classNames(
      "rounded-sm px-2 py-1 w-full flex gap-2 items-center",
      {
        "text-sm": size === "small",
        "text-md": size === "medium",
        "text-lg": size === "large",
      },
      { "bg-slate-200": selected }
    )}
    {...props}
  >
    {slot?.left}
    <div className="grow">{children}</div>
    {slot?.right}
  </div>
);
