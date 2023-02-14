import React from "react";
import { Button, Card } from "react-bootstrap";

const DrinkCard = ({ drinkImg, drinkName, drinkPrice }) => {
  return (
    <Card className="m-2 p-1">
      <Card.Img src={drinkImg} />
      <Card.Text>{drinkName}</Card.Text>
      <Card.Text>$ {drinkPrice} k</Card.Text>
      <div className=" d-flex align-items-center justify-content-center g-1">
        <Button>-</Button>
        <span>1</span>
        <Button>+</Button>
      </div>
    </Card>
  );
};

export default DrinkCard;
