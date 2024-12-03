import { Titem } from "../client";

export type TshoppingCartContextType = {
  cart: Titem[];
  data: Titem[];
  updateData: (data: Titem[]) => void;
  addItemToCart: ({ id }: Pick<Titem, "id">) => void;
  removeItemFromCart: ({ id }: Pick<Titem, "id">) => void;
  clearCart: () => void;
};
