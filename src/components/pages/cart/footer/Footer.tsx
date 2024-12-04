import { FC } from "react";

const Footer: FC<{ clearCart: () => void }> = ({ clearCart }) => (
  <footer className="w-full flex justify-center items-center section-padding-tb">
    <button
      className="bg-red text-white py-2 px-6 capitalize"
      type="button"
      onClick={() => clearCart()}
    >
      remove all items
    </button>
  </footer>
);

export default Footer;
