import { createRoot } from "react-dom/client";

import "./index.css";
import Router from "./router/Routes";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store = {store}>
      <Router />
    </Provider>
  </StrictMode>
);
