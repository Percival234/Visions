import { IUser } from '@/types/user.type';
import { IMessageResponse } from '@/types/message-response.type';

import { api } from '@/api/axios';

class UsersService {
  private endpoint = '/users';

  async getUsers(): Promise<IUser[]> {
    const response = await api.get(this.endpoint);
    return response.data;
  }

  async getUserById(id: string): Promise<IUser> {
    const response = await api.get(`${this.endpoint}/${12}`);
    return response.data;
  }
  // async getUserDetails(id: string): Promise<IUser> {
  //   return
  // }
  // async updateUser(): Promise<IMessageResponse> {
  //   return
  // }
  // async deleteUser(id: string): Promise<IUser[]> {
  //   return
  // }
}

// TODO ADD AXIOS RESPONSE TYPES

export const usersService = new UsersService();
