/** Primary UI component for user interaction */
import classNames from "classnames";

export interface LabelTextProps {
  text: string;
  error?: boolean;
  disabled?: boolean;
}

/** Primary UI component for user interaction */
export const LabelText = ({ text, error, disabled }: LabelTextProps) => {
  return (
    <p
      className={classNames(
        { "text-gray-400": disabled },
        { "text-red-500": error }
      )}
    >
      {text}
    </p>
  );
};
