import { IPaintingStyle } from '@/types/painting-style.type';

import { api } from '@/api/axios';

class PaintingStylesService {
  private endpoint = '/painting-styles';

  async getPaintingStyles(): Promise<IPaintingStyle[]> {
    const response = await api.get<IPaintingStyle[]>(this.endpoint);
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

export const paintingStylesService = new PaintingStylesService();
