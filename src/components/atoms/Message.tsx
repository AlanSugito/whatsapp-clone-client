import { FC } from "react";
import { format } from "timeago.js";

interface MessageProps {
  text: string;
  postedAt: string | Date;
  isSender: boolean;
}

const Message: FC<MessageProps> = ({ text, postedAt, isSender }) => {
  return (
    <div
      className={`flex flex-col gap-1 min-w-[100px] w-max max-w-xs ${
        isSender ? "self-end" : "self-start"
      }`}
    >
      <div
        className={`rounded-md text-slate-600 py-2 px-3 ${
          isSender ? "bg-green-400" : "bg-white"
        }`}
      >
        {text}
      </div>
      <span
        className={`text-slate-400 text-xs ${
          isSender ? "text-right" : "text-left"
        }`}
      >
        {format(postedAt)}
      </span>
    </div>
  );
};

export default Message;
