import { ConversationAction, IConversation } from "../types";

const conversationReducer = (
  state: IConversation,
  action: ConversationAction
) => {
  switch (action.type) {
    case "SELECT_USER":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
};

export default conversationReducer;
