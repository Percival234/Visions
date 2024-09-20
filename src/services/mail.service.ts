import { api } from '@/api/axios';

import { IMail } from '@/types/mail.type';
import { IMessageResponse } from '@/types/message-response.type';

class MailServise {
  private endpoint = '/mail';

  async getUserMail(): Promise<IMail> {
    const response = await api.get(this.endpoint);
    return response.data;
  }

  async checkStatusToRead() {}

  // async postMessage(message, receiverId: string | null): Promise<IMessageResponse> {
  //   const response = await api.post(`${this.endpoint}`);
  //   return response.data;
  // }
}

export const mailService = new MailServise();
