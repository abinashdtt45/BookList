import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./context/bookContext";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider>
    <App />
  </Provider>
);
