import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
