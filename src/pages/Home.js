import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Tables from "../components/Tables";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="home">
      <div className="container">
        {/* <Navbar /> */}
        {/* <Container>
          <Routes>
            <Route path="/" element={<Tables />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </Container> */}
      </div>
    </div>
  );
};

export default Home;
