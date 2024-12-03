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

  const addItemToCart = ({ id }: Pick<Titem, "id">) => {
    const item = data.filter((el) => el.id === id)[0];

    const itemExists = cart.filter((el) => el.id === id)[0];
    if (itemExists) {
      const updateCart = cart.map((el) => {
        if (el.id === id) {
          return { ...item, quantity: el.quantity + 1 };
        }
        return el;
      });

      return setCart(updateCart);
    }

    return setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeItemFromCart = ({ id }: Pick<Titem, "id">) => {
    const item = cart.filter((el) => el.id === id)[0];

    if (item.quantity > 1) {
      const updateItem = cart.map((el) => {
        if (el.id === id) {
          return { ...item, quantity: el.quantity - 1 };
        }
        return el;
      });

      return setCart(updateItem);
    }

    const removeItemFromCart = cart.filter((item) => item.id !== id);
    return setCart(removeItemFromCart);
  };

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
