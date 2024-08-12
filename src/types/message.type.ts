export interface IMessage {
  id: string;
  text: string;
  title: string;
  sender: string;
  mailId: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateMessage extends Pick<IMessage, 'title' | 'text' | 'sender'> {
  receiverId: string;
}
