import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { TableContext } from "../context/TableContext";
import TableCards from "./TableCards";

const tablesStored = [
  { id: 1, pedido: [["pedido1"], ["pedido2"], ["pedido3"]] },
  { id: 2, pedido: [["pedido4"], ["pedido5"], ["pedido6"]] },
  { id: 3, pedido: [["pedido7"], ["pedido8"], ["pedido9"]] },
  { id: 4, pedido: [["pedido10"], ["pedido11"], ["pedido12"]] },
  { id: 5, pedido: [["pedido13"], ["pedido14"], ["pedido15"]] },
  { id: 6, pedido: [["pedido16"], ["pedido17"], ["pedido18"]] },
];

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
