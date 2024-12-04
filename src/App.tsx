import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/layout";
import { Four0Four, Home } from "./pages";
import { LoadingPage } from "./components/common/pages";

const Cart = lazy(() => import("./pages/cart/Page"));

import "./style/tailwind.css";
import "./style/loaders.css";
import "./style/index.css";

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="cart"
        element={<Suspense fallback={<LoadingPage />} children={<Cart />} />}
      />

      <Route path="*" element={<Four0Four />} />
    </Route>
  </Routes>
);

export default App;
