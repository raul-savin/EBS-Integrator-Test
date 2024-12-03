import { FC } from "react";
import { Link } from "react-router-dom";
import { REDIRECT_TO_HOME_PAGE } from "@/constants";

const Logo: FC = () => (
  <Link className="text-[19px] hover:text-blue" to={REDIRECT_TO_HOME_PAGE}>
    EBS Integrator Test
  </Link>
);

export default Logo;
