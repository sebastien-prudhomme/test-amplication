import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArgoCdUpdateInput = {
  name?: string;
  userId?: UserWhereUniqueInput;
};
