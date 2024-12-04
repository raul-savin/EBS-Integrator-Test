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
    <aside className="element-padding-tb w-full lg:pb-0 lg:w-fit !mt-0">
      <h2 className="uppercase pb-2 text-center w-full lg:text-start">
        Category
      </h2>
      <ul className="inner-section lg:w-fit">
        {categories.sort().map((el, index) => (
          <Category key={index} category={el} onClick={toFilter} />
        ))}
      </ul>
    </aside>
  );
};

export default Filter;
