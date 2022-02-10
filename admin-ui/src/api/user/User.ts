import { ArgoCd } from "../argoCd/ArgoCd";

export type User = {
  argoCds?: Array<ArgoCd>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
