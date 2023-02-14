import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { SoftUIControllerProvider } from "context";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <SoftUIControllerProvider>
          <App />
        </SoftUIControllerProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
