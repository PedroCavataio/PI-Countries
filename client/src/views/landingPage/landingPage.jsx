import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";

const Landing = ({ userName }) => {
  const navigate = useNavigate();
  const { estacion } = useParams();

  const handleEnter = () => {
    navigate("/home");
  };

  const fondoPorEstacion = () => {
    if (!estacion) {
      return "landing-page";
    } else if (estacion === "primavera") {
      return 'landing-page primavera'
    } else if (estacion === "verano") {
      return 'landing-page verano'
    } else if (estacion === "otoño") {
      return 'landing-page otoño'
    } else if (estacion === "invierno") {
      return 'landing-page invierno'
    }
  }

  return (
    <div className={fondoPorEstacion()}>
      <div className="container-landing">
        <h2 className="description-landing">{userName} te presento mi Portfolio,!</h2>
        <h3 className="sub-description">By Pedro Francisco Cavataio</h3>
        <button className="enter-button-landing" onClick={handleEnter}>Ingresar</button>
      </div>
    </div>
  );
};

export default Landing;
