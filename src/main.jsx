import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  // If the page was pre-rendered by SSR/SSG, hydrate; otherwise standard render
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement, <App />);
  } else {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}
