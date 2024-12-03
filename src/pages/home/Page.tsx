import { FC, useEffect, useState } from "react";
import axios from "axios";

import { ItemCard } from "@/components/common/card";
import { useShoppingContext } from "@/context";
import { FAKE_API, SERVER_ERROR } from "@/constants";
import { Titem, Tstate } from "@/types";

const Page: FC = () => {
  const [state, setState] = useState<Tstate>({
    items: [],
  });
  const [loading, setLoading] = useState(false);
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

  return (
    <main className="main flex w-full flex-row">
      <section className="section">
        <ul className="inner-section [@media(width<1280px)]:[&>li:not(:nth-child(n+3))]:mb-[var(--md)] [@media(width<768px)]:[&>li:nth-last-of-type(2)]:mb-[var(--md)]">
          {state.items.length &&
            state.items.map((el) => <ItemCard key={el.id} {...el} />)}
        </ul>
      </section>
    </main>
  );
};

export default Page;
