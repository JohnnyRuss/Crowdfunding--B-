import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import "./styles/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import AppProvider from "./store/AppContext";

createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
