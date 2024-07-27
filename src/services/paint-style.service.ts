import { IPaintStyle } from '@/types/user.types';

import { api } from '@/api/axios';

class PaintStylesService {
  constructor(private endpoint: string = '/paint-styles') {}

  async getPaintStyles(): Promise<IPaintStyle[]> {
    const response = await api.get<IPaintStyle[]>('/paint-styles');
    return response.data;
  }
  // async createPaintStyle(data): Promise<IMessageResponse> {
  //   return;
  // }
  // async updatePaintStyle(data): Promise<IMessageResponse> {
  //   return;
  // }
  // async deletePaintStyle(id: string): Promise<IMessageResponse> {
  //   return;
  // }
}

export const paintStylesService = new PaintStylesService();
