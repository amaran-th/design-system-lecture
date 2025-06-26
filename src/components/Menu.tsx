import classNames from "classnames";
import type { ReactNode } from "react";

export interface MenuProps {
  children: ReactNode;
  width?: number;
  density?: "dense" | "compact" | "spacious";
}

/** Primary UI component for user interaction */
export const Menu = ({
  children,
  width = 180,
  density = "compact",
  ...props
}: MenuProps) => (
  <div
    className={classNames("rounded-sm shadow-md flex flex-col", {
      "gap-0 p-0": density === "dense",
      "gap-2 px-2 py-1": density === "compact",
      "gap-4 px-4 py-4": density === "spacious",
    })}
    style={{ width }}
    {...props}
  >
    {children}
  </div>
);
