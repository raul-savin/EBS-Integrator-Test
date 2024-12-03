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
    <li>
      <label>
        <input type="checkbox" defaultChecked={checked} onChange={onChange} />
        {category}
      </label>
    </li>
  );
};

export default Category;
