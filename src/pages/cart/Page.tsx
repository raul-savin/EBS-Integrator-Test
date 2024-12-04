import { FC } from "react";

import { Footer, NoItems } from "@/components/pages/cart";
import { ItemCard } from "@/components/common/card";
import { useShoppingContext } from "@/context";
import { isEmpty } from "@/utils";

const Page: FC = () => {
  const { cart } = useShoppingContext();

  return (
    <main className="main min-h-[calc(100vh-var(--footer)-var(--navbar)-var(--xxl))]">
      <section className="section section-margin-tb">
        <header className="mx-auto">
          <h2>Total cost: 0$</h2>
        </header>
      </section>
      <section className="section m-auto items-center justify-center">
        <aside className="w-full">
          <ul className="inner-section">
            {!isEmpty(cart) &&
              cart.map((item) => <ItemCard key={item.id} {...item} />)}
          </ul>
          {isEmpty(cart) && <NoItems />}
        </aside>
        {!isEmpty(cart) && <Footer />}
      </section>
    </main>
  );
};

export default Page;
