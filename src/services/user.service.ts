import { IUser } from '@/types/user.type';
import { ISignInCredentials, ISingUpCretendials } from '@/types/credential.types';
import { IMessageResponse } from '@/types/message-response.type';

import { api } from '@/api/axios';

class UsersService {
  private endpoint = '/users';

  async signIn(credentials: ISignInCredentials): Promise<IMessageResponse> {
    const response = await api.post(`${this.endpoint}/sign-in`, credentials);
    return response.data;
  }

  async signUp(credentials: ISingUpCretendials): Promise<IMessageResponse> {
    const response = await api.post(`${this.endpoint}/sign-up`, credentials);
    return response.data;
  }

  async getUsers(): Promise<IUser[]> {
    const response = await api.get(`${this.endpoint}`);
    return response.data;
  }

  async getUserById(id: string): Promise<IUser> {
    const response = await api.get(`${this.endpoint}/${id}`);
    return response.data;
  }

  async getProfile(): Promise<IUser> {
    const response = await api.get(`${this.endpoint}/profile`);
    return response.data;
  }

  // async updateUser(): Promise<IMessageResponse> {
  //   return
  // }
  // async deleteUser(id: string): Promise<IUser[]> {
  //   return
  // }
}

// TODO ADD AXIOS RESPONSE TYPES

export const usersService = new UsersService();
