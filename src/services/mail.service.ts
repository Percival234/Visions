import { api } from '@/api/axios';

import { IMail } from '@/types/mail.type';
import { IMessageResponse } from '@/types/message-response.type';

class MailServise {
  private endpoint = '/mail';

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getUserMail(userId: string): Promise<IMail> {
    const response = await api.get(`${this.endpoint}/${userId}`);
    await this.delay(2000); // Затримка на 2 секунди
    return response.data;
  }

  async checkStatusToRead() {}

  // async postMessage(message, receiverId: string | null): Promise<IMessageResponse> {
  //   const response = await api.post(`${this.endpoint}`);
  //   return response.data;
  // }
}

export const mailService = new MailServise();
