import { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { TableContext } from "../context/TableContext";
import checkIcon from "../icons/check.svg";
import DrinkCard from "./DrinkCard";

const Table = () => {
  const { currentTableNumber, currentTable, setCurrentTable, cocktailMenu } =
    useContext(TableContext);

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-3">Mesa: {currentTableNumber}</h1>
      <Row md={2} sm={1} className="g-3">
        {cocktailMenu &&
          cocktailMenu.map((drink) => (
            // console.log(dirnk.strDrink);
            <Col key={drink.idDrink}>
              <DrinkCard
                drinkId={drink.idDrink}
                drinkImg={drink.strDrinkThumb}
                drinkName={drink.strDrink}
                drinkPrice={15}
              />
            </Col>
          ))}
      </Row>

      <Button className="bg-success m-3">
        <img src={checkIcon} alt="" />
      </Button>
    </div>
  );
};

export default Table;
