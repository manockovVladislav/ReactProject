import React from "react";
import ReactDOM from "react-dom";

import ButtonPrime from "./buttonPrimari";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ButtonPrime />
  </React.StrictMode>,
  rootElement
);
