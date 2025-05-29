import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// redux provider to connect store to app
import { Provider } from "react-redux";

// import redux store
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(

  // wrap the app with redux provider
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
