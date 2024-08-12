export enum OrderStatusEnum {
  Pending = 'Pending',
  Confirmed = 'Confirmed',
  Preparing = 'Preparing',
  OutForDelivery = 'Out for delivery',
  Delivered = 'Delivered',
  Canceled = 'Canceled',
}

export interface IOrder {
  id: string;
  sender: string;
  receiver: string;
  status: OrderStatusEnum;
  createdAt: string;
  updatedAt: string;
}
