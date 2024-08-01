import { IMessage } from '@/types/message.type';

export interface IMail {
  id: string;
  userId: string; // user_id
  messages: IMessage[];

  createdAt: Date; // created_at
  updatedAt: Date; // updated_at
}
