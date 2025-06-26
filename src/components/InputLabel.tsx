import classNames from "classnames";
import type { ReactNode } from "react";
import { Asterisk } from "./Asterisk";
import { LabelText } from "./LabelText";

export interface InputLabelProps {
  text: string;
  slot?: {
    left?: ReactNode;
    right?: ReactNode;
  };
  required?: boolean;
  NestedLabelText?: typeof LabelText;
}

/** Primary UI component for user interaction */
export const InputLabel = ({
  text,
  slot,
  required,
  NestedLabelText,
}: InputLabelProps) => {
  return (
    <div className={classNames("flex gap-1 justify-start items-center")}>
      {slot?.left}
      <div className="flex">
        {NestedLabelText ? (
          <NestedLabelText text={text} />
        ) : (
          <LabelText text={text} />
        )}
        {required && <Asterisk />}
      </div>
      {slot?.right}
    </div>
  );
};
