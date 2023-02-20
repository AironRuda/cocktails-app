import { doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TableContext } from "../context/TableContext";
import { db } from "../firebase";
import PencilLogo from "../icons/pencil.svg";

const Comanda = () => {
  const { currentTable } = useContext(TableContext);
  const navigate = useNavigate();

  const handleComandaConfirmed = async () => {
    try {
      const orderRef = doc(db, "tables", currentTable.id.toString());
      await updateDoc(orderRef, {
        order: currentTable.order,
      });
      navigate("/bill");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Comanda</h1>
      <h1>Mesa: {currentTable.id}</h1>
      <div>
        <div className="d-flex">
          <h2 className=" mx-4">Cant.</h2>
          <h2>product.</h2>
        </div>
        {currentTable.order.map((orderItem) => (
          <div
            key={orderItem.id}
            className=" d-flex m-3 align-items-center justify-content-start"
          >
            <p className="mx-4 bg-secondary p-2 rounded-2">
              {orderItem.quantity}
            </p>
            <p className="mx-4 bg-info p-2 rounded-2">{orderItem.drinkName}</p>
          </div>
        ))}
      </div>
      <div>
        <Button
          className=" m-3 btn-warning"
          onClick={() => {
            navigate("/table");
          }}
        >
          <img src={PencilLogo} alt="" />
        </Button>
        <Button className=" m-3 btn-success" onClick={handleComandaConfirmed}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Comanda;
