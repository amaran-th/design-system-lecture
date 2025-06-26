import classNames from "classnames";
import type { ReactNode } from "react";
import type { TextColor } from "../stories/type";
import { convertColor } from "../stories/util";

export interface IconProps {
  size?: 16 | 20 | 24 | 28 | 32;
  color?: TextColor;
  disabled?: boolean;
  swap?: ReactNode;
}

/** Primary UI component for user interaction */
export const Icon = ({ color, size = 24, disabled, swap }: IconProps) => {
  return (
    <div
      className={classNames(`text-[${size}px]`, `text-${convertColor(color)}`, {
        "text-gray-400": disabled,
      })}
      style={{ color }}
    >
      {swap ?? "+"}
    </div>
  );
};
