import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "components/App/App";
import { store } from "store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { CssBaseline } from "@mui/material";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error?.response?.status === 400) {
      alert(error.response.data?.data);
    }

    return Promise.reject(error?.response ?? error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
