import { axiosInstance } from "../configs";

class ConversationAPI {
  getConversationsById(id: string) {
    return axiosInstance.get(`/conversations/${id}`);
  }
}

export default new ConversationAPI();
