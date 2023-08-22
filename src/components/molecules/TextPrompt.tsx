import { FC } from "react";
import { BaseTextarea, IconedButton } from "..";

interface TextPromptProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  send: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const TextPrompt: FC<TextPromptProps> = ({ value, send, ...props }) => {
  return (
    <div className="bg-slate-100 py-2 px-5 flex gap-3 items-center">
      <BaseTextarea placeholder="Type a message" {...props} value={value} />
      <IconedButton
        icon="ri-send-plane-2-line"
        className="rounded-full aspect-square"
        onClick={send}
      />
    </div>
  );
};

export default TextPrompt;
