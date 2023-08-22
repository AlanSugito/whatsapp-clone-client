import { createContext, useContext, useReducer, useCallback } from "react";
import { IConversation } from "../types";
import { conversationReducer } from "../reducers";

export const useConversationContext = (initValue: IConversation) => {
  const [state, dispatch] = useReducer(conversationReducer, initValue);

  const selectContact = useCallback((payload: IConversation) => {
    dispatch({ type: "SELECT_USER", payload });
  }, []);

  return { state, selectContact };
};

type UseConversationContextType = ReturnType<typeof useConversationContext>;

export const initialState: IConversation = {
  id: "",
  members: [],
};

const initialContextState: UseConversationContextType = {
  state: initialState,
  selectContact: (payload: IConversation) => {
    console.log(payload);
  },
};

const ConversationContext =
  createContext<UseConversationContextType>(initialContextState);

export const useConversation = () => {
  const {
    state: { id, members },
    selectContact,
  } = useContext(ConversationContext);

  return { id, members, selectContact };
};

export default ConversationContext;
