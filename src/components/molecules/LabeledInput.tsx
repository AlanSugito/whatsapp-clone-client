import { FC } from "react";
import { BaseInput, BaseLabel } from "../atoms";

interface LabeledInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  type?: "text" | "password";
  value?: string;
}

const LabeledInput: FC<LabeledInputProps> = ({
  label,
  type,
  value,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <BaseLabel label={label} />
      <BaseInput {...props} type={type} value={value} />
    </div>
  );
};

export default LabeledInput;
