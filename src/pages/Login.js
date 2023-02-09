import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import logo from "../img/logo.png";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWraper">
        <img className="logo" src={logo} />
        <span className="title">Registrate!</span>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="email" id="email" />
          <input type="password" placeholder="password" id="password" />
          <button>Sign up</button>
          {error && <span>!!! Something went wrong !!!</span>}
        </form>
        <p>
          You don't have an acount? <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
