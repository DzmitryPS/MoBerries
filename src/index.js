import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MyContextProvider } from "./MyContext";

ReactDOM.render(
    <MyContextProvider>
      <App />
    </MyContextProvider>,
  document.getElementById("root")
);

reportWebVitals();
