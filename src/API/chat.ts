import { axiosInstance } from "../configs";

class ChatAPI {
  getChatByConversations(conversationId: string) {
    return axiosInstance.get(`/chats/${conversationId}`);
  }
}

export default new ChatAPI();
