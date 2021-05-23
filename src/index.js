import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//1. Store  Globalized State
//2. Action Increment
//3. Logic Reducer
//4. Dispatch
