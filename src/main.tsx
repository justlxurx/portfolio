import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n";
import Web3Provider from "./web3/provider/Web3Provider.tsx";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Web3Provider>
      <App />
    </Web3Provider>
  </Provider>
);
