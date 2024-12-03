import { FC } from "react";

import Li from "../li/Li";

const Links: FC = () => (
  <>
    <Li text="home" link="/" />
    <Li text="cart" link="/cart" />
  </>
);

export default Links;
