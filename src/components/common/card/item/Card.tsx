import { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cn from "classnames";

import Button from "./components/Button";

import { Add, Remove } from "@/svg";
import { useShoppingContext } from "@/context";
import { Titem } from "@/types";

const Card: FC<Titem> = ({ id, image, title, price, category }) => {
  const { cart, addItemToCart, removeItemFromCart } = useShoppingContext();
  const itemQuantity = cart.filter((item) => item.id === id)[0]?.quantity;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <li className="four-column element-margin-tb relative">
      <article
        className={cn(
          "flex flex-col justify-center items-center shadow-md [@media(width<1280px)]:p-[var(--sm)] element-padding-lr  element-padding-tb text-sm md:text-base !pt-0",
          { "shadow-blue-light/50": itemQuantity && pathname !== "/cart" }
        )}
      >
        {pathname === "/cart" && (
          <span className="absolute right-0 top-0 size-[24px] border-blue flex justify-center items-center rounded-sm border-[1.5px] text-xs">
            {itemQuantity}
          </span>
        )}
        <figure>
          <figcaption className="flex relative justify-center element-padding-tb capitalize md:text-xs">
            {category}
          </figcaption>
          <img
            src={image}
            alt={title}
            onClick={() => navigate(`/product/${id}`)}
            className="hover:cursor-pointer"
          />
        </figure>
        <header className="element-padding-tb text-center">
          <h2 className="text-sm">{title}</h2>
        </header>
        <footer className="flex justify-between w-full h-[40px]">
          <Button
            onClick={() => removeItemFromCart({ id })}
            disabled={!itemQuantity}
            label="remove product from cart"
          >
            <Remove />
          </Button>
          <span className="flex items-center font-medium text-sm md:text-base">
            {price}$
          </span>
          <Button
            onClick={() => addItemToCart({ id })}
            label="add product to cart"
          >
            <Add />
          </Button>
        </footer>
      </article>
    </li>
  );
};

export default Card;
