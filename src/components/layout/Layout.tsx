import { FC } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import BackToTop from "./backToTop/BackToTop";

const Layout: FC = () => (
  <>
    <Navbar />
    <Outlet />
    <BackToTop />
    <Footer />
  </>
);

export default Layout;
