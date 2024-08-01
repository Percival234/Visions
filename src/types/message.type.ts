export interface IMessage {
  id: string;
  text: string;
  title: string;
  sender: string; // sender_id (user_id)
  receiverMailId: string; // receiver_mail_id
  isReadByReceiver: boolean; // is_read_by_reciever

  createdAt: Date; // created_at
  updatedAt: Date; // updated_at
}

export interface ICreateNotification extends Pick<IMessage, 'title' | 'text' | 'sender'> {
  receiverId: string;
}
