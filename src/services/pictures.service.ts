import { api } from '@/api/axios';

import { IPicture } from '@/types/picture.type';

class PicturesService {
  private endpoint = '/pictures';

  async getPictures(): Promise<IPicture[]> {
    const response = await api.get(this.endpoint);
    return response.data;
  }
}

export const picturesService = new PicturesService();
