export interface IMessage {
  id: string;
  text: string;
  title: string;
  sender: string; // sender_id (user_id)
  receiver: string; // receiver_id (user_id)
  isReadByReceiver: boolean; // is_read_by_reciever

  createdAt: Date; // created_at
  updatedAt: Date; // updated_at
}

export interface IMail {
  id: string;
  owner: string; // owner_id (user_id)
  messages: string[]; // messages_ids

  createdAt: Date; // created_at
  updatedAt: Date; // updated_at
}

export enum RolesEnum {
  USER = 'USER',
  CREATOR = 'CREATOR',
  ADMIN = 'ADMIN',
}

export interface IUser {
  id: string;
  roles: RolesEnum[];
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  // password:
  image: string;
  address: {
    city: string;
    street: string;
  };
  isBlocked: boolean; // is_blocked
  isDeleted: boolean; // is_deleted

  totalSpent: number; // total_spend

  createdAt?: Date; // created_at
  updatedAt: Date; // updated_at // TODO add optional setting create and update
}

export interface IPaintStyle {
  id: string;
  name: string;
  description: string;

  createdAt?: Date; // created_at
  updatedAt?: Date; // updated_at
}

export interface IPicture {
  id: string;
  name: string;
  image: string;
  price: number;
  creator: string; // creator_id
  inStock: boolean; // in_stock
  description: string;
  discount: number;
  likedBy: string[]; // liked_by_ids
  styles: []; // styles_ids
  // totalPurchase

  createdAt?: Date; // created_at
  updatedAt?: Date; // updated_at
}

export interface IReport {
  id: string;
  text: string;
  sender: string; // sender_id (user_id)
  isRead: boolean;

  createdAt?: Date; // created_at
  updatedAt?: Date; // updated_at
}

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

export interface IReview {
  id: string;
  text: string;
  user: string; // user_id
  picture: string; // picture_id

  createdAt?: Date; // created_at
  updatedAt?: Date; // updated_at
}
