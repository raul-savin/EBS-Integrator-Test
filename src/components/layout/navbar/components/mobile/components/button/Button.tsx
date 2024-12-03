import { FC } from "react";
import cn from "classnames";

import Span from "./Span";
import { TnavMobile } from "@/types/client";

const Button: FC<TnavMobile> = ({ onToggle, isOpen }) => (
  <button
    type="button"
    aria-label="menu buton"
    onClick={onToggle}
    className="relative z-20 flex size-[40px] items-center overflow-hidden border-2 border-solid border-black p-[4px] md:hidden"
  >
    <Span
      elClass={cn(
        isOpen
          ? "w-[28px] translate-y-0 rotate-45"
          : "w-[18px] translate-y-[-10px] border-r-4 border-r-dark"
      )}
    />
    <Span
      elClass={cn(
        "w-[28px]",
        isOpen ? "translate-x-[60px]" : "border-r-4 border-r-dark"
      )}
    />
    <Span
      elClass={cn(
        isOpen
          ? "w-[28px] translate-y-0 rotate-[315deg]"
          : "w-[10px] translate-y-[10px] border-r-4 border-r-dark"
      )}
    />
  </button>
);

export default Button;
