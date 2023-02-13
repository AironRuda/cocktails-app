import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { TableContextProvider } from "./context/TableContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <TableContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TableContextProvider>
  </AuthContextProvider>
);
