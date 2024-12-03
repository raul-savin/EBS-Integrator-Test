import { FC } from "react";

import Category from "./components/Category";
import { Tfilter, Titem } from "@/types";

const Filter: FC<Tfilter> = ({ data, state, setState }) => {
  const normalizeData = data.map((el) => el.category);
  const categories = [...new Set(normalizeData)];

  const toFilter = ({ category }: Pick<Titem, "category">) => {
    if (state.category.includes(category)) {
      const updateCategory = state.category.filter((el) => el !== category);
      return setState({ ...state, category: updateCategory });
    }

    return setState({ ...state, category: [...state.category, category] });
  };

  return (
    <aside className="w-[200px] element-padding-lr">
      <h2 className="uppercase pb-2">Category</h2>
      <ul className="inner-section flex-col">
        {categories.map((el, index) => (
          <Category key={index} category={el} onClick={toFilter} />
        ))}
      </ul>
    </aside>
  );
};

export default Filter;
