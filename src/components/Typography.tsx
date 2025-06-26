/** Primary UI component for user interaction */
import classNames from "classnames";
import type { ReactNode } from "react";

export interface TypographProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "caption";
  weight?: "reular" | "medium" | "semibold";
  disabled?: boolean;
}

/** Primary UI component for user interaction */
export const Typography = ({
  children,
  variant,
  weight,
  disabled,
}: TypographProps) => {
  return (
    <p
      className={classNames(
        { "text-gray-400": disabled },
        { "text-3xl font-extrabold": variant === "h1" },
        { "text-2xl font-extrabold": variant === "h2" },
        { "text-2xl font-bold": variant === "h3" },
        { "text-xl font-bold": variant === "h4" },
        { "text-xl font-semibold": variant === "h5" },
        { "text-lg font-semibold": variant === "h6" },
        { "text-gray-600": variant === "caption" },
        { "font-semibold": weight === "semibold" }
      )}
    >
      {children}
    </p>
  );
};
