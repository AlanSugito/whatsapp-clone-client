import { conversationAPI } from "../../API";
import { useConversation } from "../../context";
import { IConversation, TUser } from "../../types";
import { storage } from "../../utils";
import { ConversationLayout } from "../layouts";
import { Conversation } from "../molecules";
import { useEffect, useState } from "react";

const Conversations = () => {
  const { id } = storage.getItem("user");
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const conversation = useConversation();

  useEffect(() => {
    const getConversations = async () => {
      const response = await conversationAPI.getConversationsById(id);
      setConversations(response.data.conversations);
    };

    getConversations();
  }, [id]);

  const selectConversation = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedConv = conversations.find(
      (conv) => conv.id === e.currentTarget.id
    );
    conversation.selectContact(selectedConv as IConversation);
  };

  const getContact = (members: TUser[]): TUser => {
    const contact = members.find((member) => member.id !== id);
    return contact as TUser;
  };

  return (
    <>
      <ConversationLayout>
        {conversations.map((conversation) => (
          <Conversation
            id={conversation.id}
            key={conversation.id}
            contactId={getContact(conversation.members).id}
            image={getContact(conversation.members).image}
            username={getContact(conversation.members).username}
            lastMesage="hello world sinodw cwec wec wecwekj vwvwk vwk vwv ewv ewk vewk"
            onClick={selectConversation}
          />
        ))}
      </ConversationLayout>
    </>
  );
};

export default Conversations;
