import { useContext } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TableContext } from "../context/TableContext";
import tableImg from "../img/mesa.png";

const TableCards = ({ idNum }) => {
  const navigate = useNavigate();
  const { setCurrentTableNumber } = useContext(TableContext);

  const handleTableSelected = () => {
    setCurrentTableNumber(idNum);
    navigate("table");
  };
  return (
    <Card className="p-3" onClick={handleTableSelected}>
      <Card.Img src={tableImg} height="50px" style={{ objectFit: "cover" }} />
      <Card.Text>table: {idNum}</Card.Text>
    </Card>
  );
};

export default TableCards;
