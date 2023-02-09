import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      Home
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        signOut
      </button>
    </div>
  );
};

export default Home;
