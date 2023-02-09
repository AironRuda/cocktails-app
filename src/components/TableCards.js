import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tableImg from "../img/mesa.png";

const TableCards = ({ idNum }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="p-3"
      onClick={() => (console.log(idNum), navigate("table"))}
    >
      <Card.Img src={tableImg} height="50px" style={{ objectFit: "cover" }} />
      <Card.Text>table: {idNum}</Card.Text>
    </Card>
  );
};

export default TableCards;
