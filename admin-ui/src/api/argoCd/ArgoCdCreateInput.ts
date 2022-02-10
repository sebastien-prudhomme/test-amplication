import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArgoCdCreateInput = {
  name: string;
  userId: UserWhereUniqueInput;
};
