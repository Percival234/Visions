export interface IPaginatedResponse<T> {
  data: T;
  pages: number;
}

export interface IMessageResponse {
  message: string;
}
