import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import logo from "../img/logo.png";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(displayName, name, email, password);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(res.user, {
        displayName,
      });
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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="displayName" id="displayName" />
          <input type="text" placeholder="name" id="name" />
          <input type="email" placeholder="email" id="email" />
          <input type="password" placeholder="password" id="password" />
          <button>Sign up</button>
          {error && <span>Something went wrong!</span>}
        </form>
        <p>
          You do have an acount? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
