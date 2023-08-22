import { chatAPI } from "../../API";
import { useEffect, useState, useRef } from "react";
import { IChat } from "../../types";
import { Message } from "../atoms";
import { storage } from "../../utils";
import { socket } from "../../configs";
import { useConversation } from "../../context";

const Chats = () => {
  const user = storage.getItem("user");
  const conversation = useConversation();
  const [messages, setMessages] = useState<IChat[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getChats = async () => {
      const response = await chatAPI.getChatByConversations(conversation.id);
      setMessages(response.data.chats);
    };

    getChats();
  }, [conversation.id]);

  socket.on("receive", (data) => {
    // if (conversation.id !== data.conversationId) {
    //   return;
    // }
    setMessages([...messages, data.chat]);
  });

  useEffect(() => {
    scrollRef.current?.scroll({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      className="flex flex-col gap-4 p-4 overflow-auto min-h-[80vh]"
      ref={scrollRef}
    >
      {!messages.length ? (
        <h1 className="text-center">You have no messages yet!</h1>
      ) : (
        messages.map((message) => (
          <Message
            isSender={message.userId === user.id}
            postedAt={message.createdAt}
            text={message.text}
            key={message.id}
          />
        ))
      )}
    </div>
  );
};

export default Chats;
