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
    <aside>
      <h3>Sort by</h3>
      <Select
        onChange={(e) => toSort({ value: e?.value as Tsort["value"] })}
        options={options}
        className="basic-single"
      />
    </aside>
  );
};

export default Sort;
