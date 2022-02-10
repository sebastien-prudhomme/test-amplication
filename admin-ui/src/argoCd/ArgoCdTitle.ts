import { ArgoCd as TArgoCd } from "../api/argoCd/ArgoCd";

export const ARGOCD_TITLE_FIELD = "name";

export const ArgoCdTitle = (record: TArgoCd): string => {
  return record.name || record.id;
};
