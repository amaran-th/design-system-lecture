/** Primary UI component for user interaction */
import classNames from "classnames";
import type { ReactNode } from "react";

export interface IconBoxProps {
  align?: "right" | "left";
  icon: ReactNode;
  // TODO size 관련 옵션 필요
}

/** Primary UI component for user interaction */
export const IconBox = ({ align, icon }: IconBoxProps) => {
  return (
    <div
      className={classNames(
        "flex",
        { "justify-start": align === "left" },
        { "justify-end": align === "right" }
      )}
    >
      {icon}
    </div>
  );
};
