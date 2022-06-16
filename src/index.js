import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import ArticleProvider from "./store/Article-Context/ArticleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ArticleProvider>
    <App />
  </ArticleProvider>
);
