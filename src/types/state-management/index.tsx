import { Titem } from "../client";

export type TshoppingCartContextType = {
  data: Titem[];
  updateData: (data: Titem[]) => void;
};
