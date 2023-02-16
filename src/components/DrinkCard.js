import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { TableContext } from "../context/TableContext";

const DrinkCard = ({ drinkId, drinkImg, drinkName, drinkPrice }) => {
  const { increaseQuantity, currentTable, decreaseQuantity } =
    useContext(TableContext);
  const [quantity, setQuantity] = useState(0);

  const getQuantity = () => {
    if (currentTable) {
      const order = currentTable.order;
      if (order.find((drink) => drink.id == drinkId) == null) {
        setQuantity(0);
      } else {
        order.forEach((drink) => {
          drink.id === drinkId && setQuantity(drink.quantity);
        });
      }
    }
  };

  useEffect(() => {
    getQuantity();
  }, [currentTable.order]);

  return (
    <Card className="m-2 p-1">
      <Card.Img src={drinkImg} />
      <Card.Text className=" fs-3">{drinkName}</Card.Text>
      <Card.Text>$ {drinkPrice} k</Card.Text>
      <div className=" d-flex align-items-center justify-content-center g-1">
        <Button onClick={() => decreaseQuantity(drinkId)}>-</Button>
        <span className="m-3">{quantity}</span>
        <Button onClick={() => increaseQuantity(drinkId)}>+</Button>
      </div>
    </Card>
  );
};

export default DrinkCard;
