import { IMessage } from '@/types/message.type';

export interface IMail {
  id: string;
  userId: string;
  messages: IMessage[];
  createdAt: string;
  updatedAt: string;
}
