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
  totalSpent: number; // total_spend
  isBlocked: boolean; // is_blocked
  isDeleted: boolean; // is_deleted

  createdAt?: Date; // created_at
  updatedAt: Date; // updated_at // TODO add optional setting create and update
}

export interface IUserSignIn extends Pick<IUser, 'email'> {
  password: string;
}

export interface IUserSignUp extends IUserSignIn, Pick<IUser, 'firstname' | 'lastname'> {}

export interface ICreatorSignUp extends IUserSignUp {
  phoneNumber: string;
  creditCard: string;
  workshopName: string;
}
