import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch((error) => {
        console.log("Falha ao registrar o Service Worker:", error);
      });
  });
}


root.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={2000} />
  </React.StrictMode>
);
