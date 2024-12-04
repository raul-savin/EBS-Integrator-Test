import { FC } from "react";

import { Footer, NoItems } from "@/components/pages/cart";
import { ItemCard } from "@/components/common/card";
import { Title } from "@/components/common/typography";
import { useShoppingContext } from "@/context";
import { isEmpty } from "@/utils";

const Page: FC = () => {
  const { cart, clearCart } = useShoppingContext();

  const totalCost = cart.reduce((accumulator, current) => {
    return accumulator + current.price * current.quantity;
  }, 0);

  return (
    <main className="main min-h-[calc(100vh-var(--footer)-var(--navbar)-var(--xxl))]">
      <header className="mt-[var(--md)]">
        <Title title="Shopping Cart" />
      </header>
      <section className="section section-margin-tb">
        <header className="mx-auto">
          <h2 className="border-[1.5px] border-black/10 px-2 py-2">
            Total cost: <strong>{Number(totalCost).toFixed(2)}$</strong>
          </h2>
        </header>
      </section>
      <section className="section m-auto items-center justify-center">
        <aside className="w-full">
          <ul className="inner-section justify-around">
            {!isEmpty(cart) &&
              cart.map((item) => <ItemCard key={item.id} {...item} />)}
          </ul>
          {isEmpty(cart) && <NoItems />}
        </aside>
        {!isEmpty(cart) && <Footer clearCart={clearCart} />}
      </section>
    </main>
  );
};

export default Page;
