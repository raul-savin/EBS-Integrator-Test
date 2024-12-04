import { FC } from "react";
import Select from "react-select";

import { Tsort, Tstate } from "@/types";
import { sortToHigh, sortToLow } from "@/lib";

const options = [
  { value: "low", label: "low to high" },
  { value: "high", label: "high to low" },
];

type Tprops = { state: Tstate; setState: (state: Tstate) => void };

const Sort: FC<Tprops> = ({ state, setState }) => {
  const toSort = ({ value }: Tsort) => {
    if (value === "high") {
      const sorted = sortToHigh(state.items);
      return setState({ ...state, sort: value, items: sorted });
    }

    const sorted = sortToLow(state.items);
    return setState({ ...state, sort: value, items: sorted });
  };

  return (
    <section className="section justify-end w-full lg:items-end items-center !mt-0 lg:w-fit">
      <aside className="flex items-center">
        <h3 className="mr-2">Sort by</h3>
        <Select
          onChange={(e) => toSort({ value: e?.value as Tsort["value"] })}
          options={options}
          className="basic-single w-[150px]"
        />
      </aside>
    </section>
  );
};

export default Sort;
