export enum RolesEnum {
  USER = 'USER',
  CREATOR = 'CREATOR',
  ADMIN = 'ADMIN',
}

export interface IUser {
  id: string;
  roles: RolesEnum[];
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  avatar: string;
  city: string;
  street: string;
  totalSpent: number;
  isBlocked: boolean;
  isDeleted: boolean;
  liked: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IUserBrief extends Pick<IUser, 'id' | 'firstName' | 'lastName' | 'avatar'> {}

export interface IUserSignIn extends Pick<IUser, 'email'> {
  password: string;
}

export interface IUserSignUp extends IUserSignIn, Pick<IUser, 'firstName' | 'lastName'> {}

export interface ICreatorSignUp extends IUserSignUp, Pick<IUser, 'phone'> {
  card: string;
  shopName: string;
}
