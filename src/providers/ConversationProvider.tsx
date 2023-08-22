import { ConversationContext, useConversationContext } from "../context";
import { IConversation } from "../types";

type ChildrenType = {
  children?: React.ReactElement;
};

const ConversationProvider = ({
  children,
  ...initState
}: ChildrenType & IConversation) => {
  return (
    <ConversationContext.Provider value={useConversationContext(initState)}>
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationProvider;
