import { FC } from "react";

import { Cart } from "@/svg";
import { Titem } from "@/types";
import { useNavigate } from "react-router-dom";

const ShoppingBag: FC<{ cart: Titem[] }> = ({ cart }) => {
  const navigate = useNavigate();

  const items = cart.reduce((accumulator, current) => {
    return accumulator + current.quantity;
  }, 0);

  return (
    <aside
      className="fixed right-[1.25rem] hover:cursor-pointer md:right-6 md:top-12 lg:right-8 z-10"
      onClick={() => navigate("/cart")}
    >
      <figure className="flex justify-center items-center">
        <Cart elClass="fill-[#fff]" />
        <span className="absolute text-xs font-medium text-blue mt-[12px]">
          {items}
        </span>
      </figure>
    </aside>
  );
};

export default ShoppingBag;
