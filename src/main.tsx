import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n";
import Web3Provider from "./web3/provider/Web3Provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Web3Provider>
    <App />
  </Web3Provider>
);
