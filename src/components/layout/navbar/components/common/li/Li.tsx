import { FC } from "react";
import { Link } from "react-router-dom";

type Tprops = { link: string; text: string };

const Li: FC<Tprops> = ({ link, text }) => (
  <li className="my-[16px] flex items-center justify-start md:mx-3 md:my-0">
    <Link className="text-[19px] hover:text-blue" to={link}>
      {text}
    </Link>
  </li>
);

export default Li;
