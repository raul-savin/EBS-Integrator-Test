import { FC } from "react";
import cn from "classnames";

import Links from "../../../common/links/Links";
import { TnavMobile } from "@/types/client";

const Drawer: FC<TnavMobile> = ({ onToggle, isOpen }) => (
  <div
    role="presentation"
    onClick={onToggle}
    className={cn(
      "fixed -left-0 top-0 z-10 h-screen bg-blue/80 opacity-100 transition-all duration-[1ms] md:hidden",
      {
        "w-full": isOpen,
        "w-0": !isOpen,
      }
    )}
  >
    <ul
      className={cn(
        "absolute top-0 h-full w-[175px] translate-x-[-175px] bg-black px-6 py-[var(--navbar)] text-[16px] transition-all duration-500 [&>li>a]:text-white [&>li>a:hover]:text-blue-light",
        {
          "!translate-x-0": isOpen,
        }
      )}
    >
      <Links />
    </ul>
  </div>
);

export default Drawer;
