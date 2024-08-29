import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Web3Provider from "./web3/provider/Web3Provider.tsx";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Web3Provider>
        <App />
      </Web3Provider>
    </Provider>
  </BrowserRouter>
);
