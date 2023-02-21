import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { TableContextProvider } from "./context/TableContext";
import { DayliMenuContextProvider } from "./context/DayliMenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <TableContextProvider>
      <DayliMenuContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DayliMenuContextProvider>
    </TableContextProvider>
  </AuthContextProvider>
);
