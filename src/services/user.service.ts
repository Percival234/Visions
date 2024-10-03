import { IUser } from '@/types/user.type';
import { IPaginatedResponse, IMessageResponse } from '@/types/response.type';
import { ISignInCredentials, ISingUpCretendials } from '@/types/credential.type';

import { api } from '@/api/axios';

import { IUsersSearchParams } from '@/hooks/useUsersSearchParams';
import { searchParamsFormatter } from '@/helpers/formatters/search-params-formatter';

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

  async getUsers(searchParams: IUsersSearchParams): Promise<IPaginatedResponse<IUser[]>> {
    try {
      searchParams.limit = String(3);

      const stringParams = searchParamsFormatter(searchParams);

      console.log(`${this.endpoint}?${stringParams}`);
      const response = await api.get(`${this.endpoint}?${stringParams}`);
      return response.data;
    } catch (error) {
      // console.log(error?.request?.data?.message);
      console.log(error?.response?.data?.message);
      throw Error();
    }
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
