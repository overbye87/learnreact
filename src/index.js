import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store";

import { createStore } from "redux";
import { Provider } from "react-redux";

//action = { type: "", payload: "" };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
