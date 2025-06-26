import classNames from "classnames";
import type { MouseEventHandler, ReactNode } from "react";
import type { Size, State, TextColor } from "../stories/type";
import { convertColor } from "../stories/util";
import { IconBox } from "./IconBox";

export interface IconButtonProps {
  icon: ReactNode;
  variant?: "transparent" | "outline";
  /** How large should the button be? */
  size?: Size;
  color?: TextColor;
  state?: State;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

/** Primary UI component for user interaction */
export const IconButton = ({
  icon,
  variant = "outline",
  size = "md",
  color,
  state,
  onClick,
  disabled,
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        `text-${size}`, // TODO size에 따라 너비/높이 변경
        "flex gap-1",
        variant === "outline" && `border-2 border-${convertColor(color)}`,
        { "text-gray-400 border-gray-400": disabled },
        { "": state === "hover" } // TODO
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <IconBox icon={icon} />
    </button>
  );
};
