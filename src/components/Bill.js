import { doc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TableContext } from "../context/TableContext";
import { db } from "../firebase";

const Bill = () => {
  const { currentTable } = useContext(TableContext);
  const [total, setTotal] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const getTotalSales = () => {
      if (currentTable.totalSales) {
        setTotalSales(currentTable.totalSales);
      }
    };
    getTotalSales();
  }, []);
  const handlePayConfirmed = async () => {
    try {
      const orderRef = doc(db, "tables", currentTable.id.toString());
      await updateDoc(orderRef, {
        order: [],
        totalSales: totalSales + total,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTotal = () => {
      let sum = 0;
      currentTable.order.forEach((orderItem) => {
        sum += orderItem.quantity * orderItem.drinkPrice;
      });
      setTotal(sum);
    };
    getTotal();
  }, []);
  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Factura</h1>
      <h1>Mesa: {currentTable.id}</h1>
      <div>
        {currentTable.order.map((orderItem) => (
          <div
            key={orderItem.id}
            className=" d-flex m-3 align-items-center justify-content-between"
          >
            <img
              className="mx-3 rounded-3"
              src={orderItem.drinkImg}
              style={{ height: "80px" }}
              alt=""
            />
            <div className="mx-5">
              <p>{orderItem.drinkName}</p>
              <p className="fw-bold"> $ {orderItem.drinkPrice} k</p>
            </div>
            <span className="mx-3 fw-bold">{orderItem.quantity}</span>
          </div>
        ))}
      </div>
      <div>
        <Button
          className="row m-3 btn-success justify-content-around"
          onClick={handlePayConfirmed}
        >
          <span className="col-4">pagar</span>
          <span className="col-4">$ {total} k</span>
        </Button>
      </div>
    </div>
  );
};

export default Bill;
