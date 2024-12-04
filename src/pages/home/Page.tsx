import { FC, useEffect, useState } from "react";
import axios from "axios";

import { ErrorPage, LoadingPage } from "@/components/common/pages";
import { Filter, ShoppingBag, Sort } from "@/components/pages/home";
import { ItemCard } from "@/components/common/card";
import { Title } from "@/components/common/typography";
import { useShoppingContext } from "@/context";
import { sortToHigh, sortToLow } from "@/lib";
import { isEmpty } from "@/utils";
import { FAKE_API, SERVER_ERROR } from "@/constants";
import { Titem, Tstate } from "@/types";

const Page: FC = () => {
  const [state, setState] = useState<Tstate>({
    category: [],
    sort: null,
    items: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const { cart, data, updateData } = useShoppingContext();

  // Fetch and Update state and Context state from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(FAKE_API);
        setState({ ...state, items: response.data });
        updateData(response.data);
      } catch (e) {
        return setError(SERVER_ERROR);
      } finally {
        setLoading(false);
      }
    };

    if (isEmpty(state.items)) fetchData();
    return;
  }, []);

  useEffect(() => {
    let filtered: Titem[] = [];

    // Filter items by category
    state.category.map((el) => {
      const filter = data.filter((item) => item.category === el);
      filtered.push(...filter);
    });

    // If filtered is selected
    if (!isEmpty(filtered)) {
      if (!isEmpty(state.sort)) {
        // IF Filter IS selected and Sort IS selected then return items filtered and sorted to high
        if (state.sort === "high") {
          return setState({ ...state, items: sortToHigh(filtered) });
        }
        // IF Filter IS selected and Sort IS selected then return items filtered and sorted to low
        return setState({ ...state, items: sortToLow(filtered) });
      }
      // IF Filter IS selected and Sort is NOT selected then return filtered items
      return setState({ ...state, items: filtered });
    }

    // If Sort is NOT selected return all items
    if (isEmpty(state.sort)) return setState({ ...state, items: data });

    // If Sort IS selected return all items sorted to High
    if (state.sort === "high") {
      return setState({ ...state, items: sortToHigh(data) });
    }
    // If Sort IS selected return all items sorted to Low
    return setState({ ...state, items: sortToLow(data) });
  }, [state.category]);

  if (loading) return <LoadingPage />;
  if (!isEmpty(error)) return <ErrorPage text={error} />;

  return (
    <main className="main">
      <header className="mt-[var(--md)]">
        <Title title="Product Catalog" />
      </header>
      <ShoppingBag cart={cart} />
      <section className="section !mt-0">
        <Filter data={data} state={state} setState={setState} />
        <Sort state={state} setState={setState} />
      </section>
      <section className="section flex-row justify-center !mt-[var(--sm)]">
        <ul className="inner-section [@media(width<1280px)]:[&>li:not(:nth-child(n+3))]:mb-[var(--md)] [@media(width<768px)]:[&>li:nth-last-of-type(2)]:mb-[var(--md)]">
          {!isEmpty(state.items) &&
            state.items.map((el) => <ItemCard key={el.id} {...el} />)}
        </ul>
      </section>
    </main>
  );
};

export default Page;
