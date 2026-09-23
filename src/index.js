import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from 'react-toastify';//toast contaniner
import 'react-toastify/dist/ReactToastify.css';//toast css donfiguraton

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ToastContainer />
    <App />
  </div>

);
