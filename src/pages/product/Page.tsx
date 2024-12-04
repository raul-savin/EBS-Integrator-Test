import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useShoppingContext } from "@/context";
import { NoItemPage } from "@/components/pages/product";
import { Star } from "@/svg";
import { ShoppingBag } from "@/components/pages/home";
import { FAKE_API, SERVER_ERROR } from "@/constants";
import { ErrorPage, LoadingPage } from "@/components/common/pages";
import { isEmpty } from "@/utils";
import { Titem } from "@/types";

const Page: FC = () => {
  const [state, setState] = useState<Titem | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { cart, addItemToCart, data, updateData } = useShoppingContext();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${FAKE_API}/${id}`);
        setState(response.data);

        // IF context is not persisted we need to update the data on refresh
        if (isEmpty(data)) updateData([response.data]);
      } catch (e) {
        return setError(SERVER_ERROR);
      } finally {
        setLoading(false);
      }
    };
    if (isEmpty(state)) fetchData();
    return;
  }, []);

  if (isLoading) return <LoadingPage />;
  if (error) return <ErrorPage text={error} />;
  if (!state) return <NoItemPage />;

  const { image, title, description, rating, price } = state;

  return (
    <main className="main min-h-[calc(100vh-var(--footer)-var(--navbar)-var(--xxl))] justify-center items-center">
      <section className="section">
        <ShoppingBag cart={cart} />
        <aside className="w-1/4">
          <figure>
            <img src={image} alt={title} />
          </figure>
        </aside>
        <article className="w-2/3">
          <header>
            <h1 className="element-margin-tb !mt-0">{title}</h1>
          </header>
          <p className="lg:text-sm text-justify tracking-wide">{description}</p>
          <aside className="element-padding-tb">
            <p className="flex text-sm items-center lg:text-xs mb-1">
              <Star />
              {rating.rate} out of 5
            </p>
            <p className="text-sm lg:text-xs">{rating.count} global ratings</p>
          </aside>
          <footer className="flex items-center">
            <p>Price: {price}$</p>
            <button
              onClick={() => addItemToCart({ id: state.id })}
              className="ml-4 bg-blue text-white py-2 px-6 capitalize hover:bg-blue-light hover:text-black"
              type="button"
            >
              Add to Cart
            </button>
          </footer>
        </article>
      </section>
    </main>
  );
};

export default Page;
