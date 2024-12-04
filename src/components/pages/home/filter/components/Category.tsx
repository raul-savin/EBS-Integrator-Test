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
    <li className="w-1/2 md:w-fit lg:mr-6">
      <label className="flex items-center md:justify-center lg:justify-start capitalize">
        <input
          className="mr-1 size-[16px]"
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
