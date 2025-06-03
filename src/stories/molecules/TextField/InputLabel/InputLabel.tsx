import classNames from "classnames";
import type { ReactNode } from "react";
import { Asterisk } from "../../../atoms/Asterisk/Asterisk";
import { LabelText } from "../../../atoms/LabelText/LabelText";

export interface InputLabelProps {
  label: string;
  slot?: {
    left?: ReactNode;
    right?: ReactNode;
  };
  required?: boolean;
}

/** Primary UI component for user interaction */
export const InputLabel = ({
  label,
  slot,
  required,
  ...props
}: InputLabelProps) => {
  return (
    <div className={classNames("flex gap-1 justify-between items-center")}>
      {slot?.left}
      <div className="flex">
        <LabelText label={label} {...props} />
        {required && <Asterisk />}
      </div>
      {slot?.right}
    </div>
  );
};
