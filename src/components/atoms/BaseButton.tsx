import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
}

const BaseButton: FC<BaseButtonProps> = ({
  className,
  label,
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        "text-sm font-semibold bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md disabled:bg-green-300 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default BaseButton;
