import { CreateAxiosDefaults } from 'axios';

import { SERVER_URL } from '@/constants/server-url.constant';

export const options: CreateAxiosDefaults = {
  baseURL: `${SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};
