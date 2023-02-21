import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { DayliMenuContext } from "../context/DayliMenuContext";
import { db } from "../firebase";
import checkIcon from "../icons/check.svg";

const DayliMenu = () => {
  const { daylyMenuArray, setDaylyMenuArray } = useContext(DayliMenuContext);

  useEffect(() => {
    const getDailyMenuInfo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "plates"));
        setDaylyMenuArray([]);
        querySnapshot.forEach((doc) => {
          setDaylyMenuArray((daylyMenuArray) => [
            ...daylyMenuArray,
            doc.data(),
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getDailyMenuInfo();
  }, []);

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-3">Menú de dia</h1>
      <Row md={2} sm={1} className="g-3">
        {daylyMenuArray.map((DayliMenuItem) => (
          <Col key={DayliMenuItem.plateName}>
            <Card className="m-2 p-1">
              <Card.Img src={DayliMenuItem.plateImg} />
              <Card.Text className=" fs-3">{DayliMenuItem.plateName}</Card.Text>
              <div className=" d-flex align-items-center justify-content-center g-1">
                <Button
                // onClick={() =>
                //   decreaseQuantity(drinkId, drinkImg, drinkName, drinkPrice)
                // }
                >
                  -
                </Button>
                <span className="m-3">{DayliMenuItem.plateQuantity}</span>
                <Button
                // onClick={() =>
                //   increaseQuantity(drinkId, drinkImg, drinkName, drinkPrice)
                // }
                >
                  +
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Button
        className="bg-success m-3"
        // onClick={() => {
        //   navigate("/comanda");
        // }}
      >
        <img src={checkIcon} alt="" />
      </Button>
    </div>
  );
};

export default DayliMenu;
