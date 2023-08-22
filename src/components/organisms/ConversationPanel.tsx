import Chats from "./Chats";
import { Profile, TextPrompt } from "../molecules";
import { useConversation } from "../../context";
import { socket } from "../../configs";
import { useState } from "react";
import { storage } from "../../utils";
import { TUser } from "../../types";

const ConversationPanel = () => {
  const { id, members } = useConversation();
  const user = storage.getItem("user");
  const [text, setText] = useState("");

  const sendMessage = () => {
    socket.emit("message", {
      text,
      conversationId: id,
      senderId: user.id,
      receiverId: user.id,
    });

    setText("");
  };

  const getContact = (members: TUser[]): TUser => {
    const contact = members.find((member) => member.id !== user.id);
    return contact as TUser;
  };

  const setTyping = () => {
    socket.emit("keydown", { id, idMember: user.id });
  };

  const setNotTyping = () => {
    socket.emit("keyup", { id, idMember: user.id });
  };

  const setTextValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="col-span-2 bg-pattern flex flex-col h-screen">
        {!id.length ? (
          <h2 className="text-center h-full flex items-center justify-center">
            No Conversation selected
          </h2>
        ) : (
          <>
            <Profile
              image={getContact(members).image}
              name={getContact(members).username}
            />
            <Chats />
            <TextPrompt
              onChange={setTextValue}
              send={sendMessage}
              onFocus={setTyping}
              onBlur={setNotTyping}
              value={text}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ConversationPanel;
