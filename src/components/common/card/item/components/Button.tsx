import { FC, ReactNode } from "react";

type TcardButtton = {
  label: string;
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const Button: FC<TcardButtton> = ({ label, children, onClick, disabled }) => (
  <button
    type="button"
    className="border-[1.5px] border-blue flex justify-center items-center size-[40px] [&>svg]:text-blue"
    aria-label={label}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
