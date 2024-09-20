import { AxiosError } from 'axios';
import { IMessageResponse } from './message-response.type';

export interface IAxiosError extends AxiosError<IMessageResponse> {}
