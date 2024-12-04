import { FC, ReactNode } from "react";
import cn from "classnames";

type TcardButtton = {
  label: string;
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const Button: FC<TcardButtton> = ({ label, children, onClick, disabled }) => (
  <button
    type="button"
    className={cn(
      "border-[1.5px] border-blue flex justify-center hover:bg-blue-light items-center size-[30px] lg:size-[40px] [&>svg]:text-blue",
      { "hover:bg-white": disabled }
    )}
    aria-label={label}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
