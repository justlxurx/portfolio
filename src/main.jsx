// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from "react-dom/client";
import store from "./store/index.js";
import "../src/assets/styles/global.scss";
import App from "./App.jsx";
import "./18n.js";
import { Provider } from "react-redux";

//import reportWebVitals from './reportWebVitals';
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
