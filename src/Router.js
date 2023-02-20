import React, { useContext } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { Navbar, Table, Tables, Comanda, Bill, Sales } from "./components";
import { AuthContext } from "./context/AuthContext";
import { TableContext } from "./context/TableContext";
import { ErrorPage, Login, Register } from "./pages";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="login" />;
  }
  return children;
};
const ProtectedRouteNumber = ({ children }) => {
  const { currentTableNumber } = useContext(TableContext);
  if (!currentTableNumber) {
    return <Navigate to="/" />;
  }
  return children;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Tables />
            </ProtectedRoute>
          }
        />
        <Route
          path="/table"
          element={
            <ProtectedRouteNumber>
              <Table />
            </ProtectedRouteNumber>
          }
        />
        <Route
          path="/comanda"
          element={
            <ProtectedRouteNumber>
              <Comanda />
            </ProtectedRouteNumber>
          }
        />
        <Route
          path="/bill"
          element={
            <ProtectedRouteNumber>
              <Bill />
            </ProtectedRouteNumber>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRouteNumber>
              <Sales />
            </ProtectedRouteNumber>
          }
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);
