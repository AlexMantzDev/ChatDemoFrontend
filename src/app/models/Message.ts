import { User } from './User';

export interface Message {
  id: number;
  User: User;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
