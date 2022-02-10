import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArgoCdWhereInput = {
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};
