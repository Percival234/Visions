import axios from 'axios';

import { options } from './axios-options';

export const api = axios.create(options);
export const apiWithoutCredentials = axios.create(options);

// api.interceptors.request.use((config) => {

// })
