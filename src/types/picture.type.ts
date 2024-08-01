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
