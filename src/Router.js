import React, { useContext } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { Navbar, Table, Tables } from "./components";
import { AuthContext } from "./context/AuthContext";
import { ErrorPage, Login, Register } from "./pages";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="login" />;
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
        <Route path="/table" element={<Table />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);
