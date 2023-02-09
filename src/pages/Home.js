import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Tables from "../components/Tables";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="home">
      <div className="container">
        <Navbar />
        <Tables />
      </div>
    </div>
  );
};

export default Home;
