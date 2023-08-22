import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface BaseTextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  value?: string;
}

const BaseTextarea: FC<BaseTextareaProps> = ({
  className,
  value,
  ...props
}) => {
  const [height, setHeight] = useState(30);

  const calcHeight = (value: string) => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    const newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
  };

  const resizeTextarea = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setHeight(calcHeight(e.currentTarget.value));
  };

  return (
    <textarea
      onKeyUp={resizeTextarea}
      style={{ height }}
      className={twMerge(
        "text-sm text-slate-600 w-full no-scrollbar min-h-[45px] rounded-md max-h-[150px] bg-slate-200 placeholder:text-slate-400 placeholder:text-sm py-2 px-3 outline-none",
        className
      )}
      value={value}
      {...props}
    ></textarea>
  );
};

export default BaseTextarea;
