import { useContext } from "react";
import { ShoppingCartContext } from "../shopping/ShoppingCartProvider";

const useShoppingContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context)
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider!"
    );
  return context;
};

export default useShoppingContext;
