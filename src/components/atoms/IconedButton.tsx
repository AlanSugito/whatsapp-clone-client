import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IconedButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label?: string;
  children?: React.ReactNode;
}

const IconedButton: FC<IconedButtonProps> = ({
  className,
  icon,
  children,
  label,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "text-sm font-semibold flex gap-2 justify-center items-center bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md",
        className
      )}
      {...props}
    >
      <i className={icon}></i>
      {label && <span>{label}</span>}
      {children}
    </button>
  );
};

export default IconedButton;
