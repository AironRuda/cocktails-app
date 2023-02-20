import React, { useContext, useEffect, useState } from "react";
import { TableContext } from "../context/TableContext";

const Sales = () => {
  const { tablesArray } = useContext(TableContext);
  const [dayliSales, setdayluSales] = useState(0);

  useEffect(() => {
    const getDayliSales = () => {
      let sum = 0;
      tablesArray.forEach((eachTable) => {
        if (eachTable.totalSales) sum += eachTable.totalSales;
      });
      setdayluSales(sum);
    };
    getDayliSales();
  }, []);
  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Ventas por mesa</h1>
      <p>Febrero 17 2022</p>
      <div>
        {tablesArray.map((table) => (
          <div
            key={table.id}
            className=" d-flex m-3 align-items-center justify-content-start"
          >
            <p className="mx-4 bg-secondary p-2 rounded-2">mesa: {table.id}</p>
            <p className="mx-4 bg-secondary p-2 rounded-2">
              {table.totalSales ? table.totalSales : 0} k
            </p>
          </div>
        ))}
        <div className="row m-3 btn-success justify-content-around border border-4 border-primary-subtle p-2 d-flex align-items-center rounded-2">
          <p className="col-4">Total ventas</p>
          <p className="col-4">{dayliSales} k</p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
