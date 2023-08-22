import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface BaseInputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: "text" | "password";
  value?: string;
}

const BaseInput: FC<BaseInputProps> = ({
  className,
  type,
  value,
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      className={twMerge(
        "text-slate-500 w-full rounded-md bg-slate-200 placeholder:text-slate-400 placeholder:text-xs py-2 px-3 outline-none",
        className
      )}
      {...props}
    />
  );
};

export default BaseInput;
