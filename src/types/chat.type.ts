interface IChat {
  id: string;
  text: string;
  createdAt: string;
  conversationId?: string;
  userId: number;
}

export type { IChat };
