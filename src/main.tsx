import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ShoppingCartProvider } from "@/context";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShoppingCartProvider>
);
