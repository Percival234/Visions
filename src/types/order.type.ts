export enum OrderStatusEnum {
  Pending = 'Pending',
  Confirmed = 'Confirmed',
  Preparing = 'Preparing',
  OutForDelivery = 'Out for delivery',
  Delivered = 'Delivered',
}

export interface IOrder {
  id: string;
  sender: string; // sender_id (user_id)
  receiver: string; // receiver_id (user_id)
  status: OrderStatusEnum;

  // shoppingCart: string;

  createdAt?: Date; // created_at
  updatedAt?: Date; // updated_at
}
