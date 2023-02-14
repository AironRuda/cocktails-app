import { useContext } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { TableContext } from "../context/TableContext";
import LogoImg from "../img/logo.png";
import checkIcon from "../icons/check.svg";

const Table = () => {
  const { currentTableNumber, currentTable } = useContext(TableContext);
  console.log(currentTable);

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-3">Mesa: {currentTableNumber}</h1>
      <Row md={2} sm={1} className="g-3">
        <Card className="m-2 p-1">
          <Card.Img src={LogoImg} />
          <Card.Text>cocktail name</Card.Text>
          <div className=" d-flex  align-items-center justify-content-center g-1">
            <Button>-</Button>
            <span className=" fs-3">1</span>
            <Button>+</Button>
          </div>

          {/* <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-item-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>

              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div> */}
        </Card>
      </Row>

      <Button className="bg-success m-3">
        <img src={checkIcon} alt="" />
      </Button>
    </div>
  );
};

export default Table;
