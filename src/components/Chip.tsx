import type { ReactNode } from "react";

export interface ChipProps {
  children: ReactNode;
}

/** Primary UI component for user interaction */
export const Chip = ({ children, ...props }: ChipProps) => (
  <div className="rounded-md bg-slate-200 px-2 py-1" {...props}>
    {children}
  </div>
);
