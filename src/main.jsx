import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import store from "./store/index.js";
import "../src/assets/styles/global.scss";
import { App } from "./App.jsx";
import "./18n.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);
