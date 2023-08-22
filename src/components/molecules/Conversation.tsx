import { FC, useEffect, useState } from "react";
import { truncateText } from "../../utils";
import { useConversation } from "../../context";
import { socket } from "../../configs";

interface ConversationProps {
  id: string;
  contactId: number;
  image: string;
  username: string;
  lastMesage: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Conversation: FC<ConversationProps> = ({
  id,
  contactId,
  image,
  username,
  lastMesage,
  onClick,
}) => {
  const conversation = useConversation();

  const active = id === conversation.id;
  const [isTyping, setIsTyping] = useState(false);
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);

  socket.on("type", (data) => {
    setIsTyping(contactId === data.idMember);
  });

  socket.on("untype", (data) => {
    if (contactId === data.idMember) {
      setIsTyping(false);
    }
  });

  socket.on("unread", (data) => {
    if (data.receiverId === contactId) {
      setUnreadMessageCount(data.chatCount);
    }
  });

  useEffect(() => {
    if (active) {
      socket.emit("read");
      setUnreadMessageCount(0);
    }
  }, [active, unreadMessageCount]);

  return (
    <div
      id={id}
      className={`cursor-pointer relative flex gap-3 items-center border-b py-2 px-4 hover:bg-slate-200 ${
        active ? "bg-slate-200" : "bg-white"
      }`}
      onClick={onClick}
    >
      {unreadMessageCount !== 0 && (
        <div className="absolute right-3 text-sm w-5 h-5 bg-green-400 text-white flex justify-center items-center rounded-full">
          {unreadMessageCount}
        </div>
      )}
      <img
        src={`http://localhost:2000/profile_pictures/${image}`}
        alt="profile"
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="flex flex-col gap-2 text-slate-600">
        <h3 className="text-lg">{username}</h3>
        {isTyping ? (
          <span className="text-green-500 text-sm">Typing...</span>
        ) : (
          <span className="text-sm">{truncateText(lastMesage, 35)}</span>
        )}
      </div>
    </div>
  );
};

export default Conversation;
