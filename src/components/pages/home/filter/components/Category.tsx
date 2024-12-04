import { FC, useState } from "react";

import { Tcategory } from "@/types";

const Category: FC<Tcategory> = ({ category, onClick }) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
    onClick({ category });
    return;
  };

  return (
    <li className="w-[calc(50%-4px)] md:w-fit lg:mr-6 border-[1.5px] px-2 py-2 border-black/10 mb-2">
      <label className="flex items-center hover:cursor-pointer md:justify-center text-xs lg:justify-start capitalize">
        <input
          className="mr-1 size-[14px]"
          type="checkbox"
          defaultChecked={checked}
          onChange={onChange}
        />
        {category}
      </label>
    </li>
  );
};

export default Category;
