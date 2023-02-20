import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import ImageLogo from "../icons/image.svg";

const DayliMenu = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const plateName = e.target.plateName.value;
    const plateImg = e.target.plateImgLink.value;
    const plateQuantity = e.target.plateQuantity.value;
    try {
      await setDoc(doc(db, "plates", plateName), {
        plateName: plateName,
        plateImg: plateImg,
        plateQuantity: plateQuantity,
      });
      alert("Plato:" + plateName + "agregado satisfactoriamente");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" container d-flex flex-column justify-content-center align-items-center">
      <h1>Agregar el menú del dia</h1>
      <form
        onSubmit={handleSubmit}
        className=" d-flex flex-column justify-content-center align-items-center p-3"
      >
        <input
          type="text"
          placeholder="Nombre del plato"
          className="m-3"
          id="plateName"
        />
        <input
          type="text"
          placeholder="URL con imagen del plato"
          className="m-3"
          id="plateImgLink"
        />
        <input
          type="number"
          placeholder="Cantidad disponible"
          className="m-3"
          id="plateQuantity"
        />
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default DayliMenu;
