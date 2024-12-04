import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { REDIRECT_TO_HOME_PAGE } from "@/constants";

const NoItems: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <p className="text-center">There are no items in your shopping cart</p>
      <p className="text-center">
        Click
        <span
          aria-label="link to home page"
          onClick={() => navigate(REDIRECT_TO_HOME_PAGE)}
          className="font-medium text-blue mx-2 uppercase hover:cursor-pointer"
        >
          here
        </span>
        to continue shopping
      </p>
    </>
  );
};

export default NoItems;
