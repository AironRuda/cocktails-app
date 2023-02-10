import { useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContext } from "./context/AuthContext";
import { router } from "./Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
