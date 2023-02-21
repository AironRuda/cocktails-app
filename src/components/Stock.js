import React, { useContext, useEffect, useState } from "react";
import { DayliMenuContext } from "../context/DayliMenuContext";

const Stock = () => {
  const { daylyMenuArray } = useContext(DayliMenuContext);
  const [menuPlatesQuantity, setMenuPlatesQuantity] = useState(0);

  useEffect(() => {
    const getDayliPlates = () => {
      let sum = 0;
      daylyMenuArray.forEach((eachMenuPlate) => {
        sum += eachMenuPlate.plateQuantity;
      });
      setMenuPlatesQuantity(sum);
    };
    getDayliPlates();
  }, []);

  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Ventas por mesa</h1>
      <p>Febrero 17 2022</p>
      <div>
        {daylyMenuArray.map((dayliTable) => (
          <div
            key={dayliTable.plateName}
            className=" d-flex m-3 align-items-center justify-content-start"
          >
            <p className="mx-4 bg-secondary p-2 rounded-2">
              {dayliTable.plateName}
            </p>
            <p className="mx-4 bg-secondary p-2 rounded-2">
              {dayliTable.plateQuantity}
            </p>
          </div>
        ))}
        <div className="row m-3 btn-success justify-content-around border border-4 border-primary-subtle p-2 d-flex align-items-center rounded-2">
          <p className="col-4">Total platos disponibles</p>
          <p className="col-4">{menuPlatesQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
