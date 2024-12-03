import { FC } from "react";

import Logo from "./components/logo/Logo";
import Mobile from "./components/mobile/Mobile";
import Desktop from "./components/desktop/Desktop";

const Navbar: FC = () => (
  <nav
    className="flex h-[var(--navbar)] w-full max-w-[inherit] items-center justify-between px-6 capitalize"
    role="navigation"
  >
    <Logo />
    <Desktop />
    <Mobile />
  </nav>
);

export default Navbar;
