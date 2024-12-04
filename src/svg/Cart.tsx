import { FC } from "react";

const Cart: FC<{ elClass: string }> = ({ elClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height="50"
    viewBox="0 0 24 24"
    width="50"
    className={elClass}
  >
    <path
      d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z"
      stroke="#0e6269"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
    />
  </svg>
);

export default Cart;
