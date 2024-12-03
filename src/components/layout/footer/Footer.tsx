import { FC } from "react";

const Footer: FC = () => (
  <footer role="contentinfo">
    <p className="p-[var(--md)] text-center text-xs italic text-black">
      © {new Date().getFullYear()}
      <a
        href="https://webdevraul.vercel.app"
        className="mx-1 text-xs hover:text-blue"
        target="_blank"
        rel="noreferrer"
      >
        Raul Calin Savin
      </a>
      All Rights Reserved
    </p>
  </footer>
);

export default Footer;
