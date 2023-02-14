import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { TableContext } from "../context/TableContext";
import TableCards from "./TableCards";

const Tables = () => {
  const { tablesArray } = useContext(TableContext);
  return (
    <div className="">
      <h1>Tables</h1>
      <Row md={3} sm={2} className="g-3">
        {tablesArray.map((item) => (
          <Col key={item.id}>
            <TableCards idNum={item.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tables;
