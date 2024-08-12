import { IUserBrief } from './user.type';
import { IPaintingStyle } from './painting-style.type';

export interface IPicture {
  id: string;
  name: string;
  image: string;
  price: number;
  creator: IUserBrief;
  inStock: boolean; // in_stock
  description: string;
  dimensions: {
    widht: number;
    height: number;
  };
  discount: number;
  likes: number; // liked_by_ids
  styles: IPaintingStyle[]; // paint_styles
  totalPurchase: number; // total_purchase

  createdAt?: string; // created_at
  updatedAt?: string; // updated_at
}
