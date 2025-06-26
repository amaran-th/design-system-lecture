import type { TextColor } from "./type";

export const convertColor = (color?: TextColor) => {
  switch (color) {
    case "primary":
    case "secondary":
    case "white":
      return color;
    case "error":
      return "red-500";
    case "gray":
      return "gray-600";
    case "success":
      return "green-400";
    case "warning":
      return "yellow-500";
    default:
      return "inherit";
  }
};
