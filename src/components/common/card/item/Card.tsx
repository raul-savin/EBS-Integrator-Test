import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./components/Button";

import { Add, Remove } from "@/svg";
import { useShoppingContext } from "@/context";
import { Titem } from "@/types";

const Card: FC<Titem> = ({ id, image, title, price, category }) => {
  const { cart, addItemToCart, removeItemFromCart } = useShoppingContext();
  const disableButtonIfNoQuantity = cart.map((item) => item.quantity)[0];
  const navigate = useNavigate();

  return (
    <li className="four-column element-padding-tb">
      <article className="flex flex-col justify-center items-center shadow-md [@media(width<1280px)]:p-[var(--sm)] element-padding-lr  element-padding-tb text-sm md:text-base !pt-0">
        <figure>
          <figcaption className="flex justify-center element-padding-tb !pt-0 capitalize md:text-xs">
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
          <h3>{title}</h3>
        </header>
        <footer className="flex justify-between w-full h-[40px]">
          <Button
            onClick={() => removeItemFromCart({ id })}
            disabled={!disableButtonIfNoQuantity}
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
