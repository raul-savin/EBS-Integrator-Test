import { createContext, ReactNode, useState } from "react";

import { Titem, TshoppingCartContextType } from "@/types";

export const ShoppingCartContext = createContext<
  TshoppingCartContextType | undefined
>(undefined);

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Titem[]>([]);
  const [cart, setCart] = useState<Titem[]>([]);

  const updateData = (data: Titem[]) => {
    const addQuantityToData = data.map((el) => {
      return { ...el, quantity: 0 };
    });
    setData([...addQuantityToData]);
  };

  const addItemToCart = ({ id }: Pick<Titem, "id">) => {};

  const removeItemFromCart = ({ id }: Pick<Titem, "id">) => {};

  const clearCart = () => setCart([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        data,
        updateData,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
