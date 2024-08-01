export interface IReview {
  id: string;
  text: string;
  user: string; // user_id
  picture: string; // picture_id

  createdAt?: Date; // created_at
  updatedAt?: Date; // updated_at
}
