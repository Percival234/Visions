export interface IReport {
  id: string;
  text: string;
  sender: string; // sender_id (user_id)
  isRead: boolean;

  createdAt?: Date; // created_at
  updatedAt?: Date; // updated_at
}
