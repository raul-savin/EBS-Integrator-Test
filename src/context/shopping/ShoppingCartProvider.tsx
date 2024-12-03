import { createContext, ReactNode, useState } from "react";

import { Titem, TshoppingCartContextType } from "@/types";

export const ShoppingCartContext = createContext<
  TshoppingCartContextType | undefined
>(undefined);

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Titem[]>([]);

  const updateData = (data: Titem[]) => {
    const addQuantityToData = data.map((el) => {
      return { ...el, quantity: 0 };
    });
    setData([...addQuantityToData]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        data,
        updateData,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
