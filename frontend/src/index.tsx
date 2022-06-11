import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
