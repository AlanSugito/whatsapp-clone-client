type TUser = {
  id: number;
  username: string;
  image: string;
};

interface IConversation {
  id: string;
  members: TUser[];
}

type ConversationAction = {
  type: "SELECT_USER";
  payload?: IConversation;
};

interface IConversationProvider extends IConversation {
  selectContact: (payload: IConversation) => void;
}

export type { IConversation, TUser, IConversationProvider, ConversationAction };
