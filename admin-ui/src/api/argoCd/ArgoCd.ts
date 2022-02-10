import { User } from "../user/User";

export type ArgoCd = {
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  userId?: User;
};
