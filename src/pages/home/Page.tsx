import { FC, useEffect, useState } from "react";
import axios from "axios";

import { Filter, Sort } from "@/components/pages/home";
import { ItemCard } from "@/components/common/card";
import { useShoppingContext } from "@/context";
import { sortToHigh, sortToLow } from "@/lib";
import { FAKE_API, SERVER_ERROR } from "@/constants";
import { Titem, Tstate } from "@/types";

const Page: FC = () => {
  const [state, setState] = useState<Tstate>({
    category: [],
    sort: null,
    items: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { data, updateData } = useShoppingContext();

  useEffect(() => {
    setState({ ...state, items: data });
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data }: { data: Titem[] } = await axios.get(FAKE_API);
        updateData(data);
      } catch (e) {
        return setError(SERVER_ERROR);
      } finally {
        setLoading(false);
      }
    };

    if (!state.items.length) fetchData();
    return;
  }, []);

  useEffect(() => {
    let filtered: Titem[] = [];

    state.category.map((el) => {
      const res = data.filter((item) => item.category === el);
      filtered.push(...res);
    });

    if (!filtered.length && state.items.length) {
      if (state.sort === "high") {
        return setState({ ...state, items: sortToHigh(data) });
      }
      return setState({ ...state, items: sortToLow(data) });
    }

    setState({ ...state, items: filtered });
  }, [state.category]);

  return (
    <main className="main">
      <section className="section !mt-0">
        <Filter data={data} state={state} setState={setState} />
        <Sort state={state} setState={setState} />
      </section>
      <section className="section flex-row justify-center !mt-[var(--sm)]">
        <ul className="inner-section [@media(width<1280px)]:[&>li:not(:nth-child(n+3))]:mb-[var(--md)] [@media(width<768px)]:[&>li:nth-last-of-type(2)]:mb-[var(--md)]">
          {state.items.length &&
            state.items.map((el) => <ItemCard key={el.id} {...el} />)}
        </ul>
      </section>
    </main>
  );
};

export default Page;
