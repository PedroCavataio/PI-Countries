import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nubesPortfolio from "../../assets/nubesPortfolio.jpg";
import pedroCavataio from "../../assets/LogoVerde.png";

const Login = ({ onLogin, access }) => {
  const [userData, setUserData] = useState({ nombre: "", estacion: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length === 0) {
      notify();
      onLogin(userData);
      setErrors({});
      setTimeout(() => {
        navigate(`/landing/${userData.estacion}`);
      }, 6000);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateLogin = () => {
    const errors = {};
    if (!userData.nombre) {
      errors.nombre = "El nombre es requerido";
    } else if (!isValidNombre(userData.nombre)) {
      errors.nombre = "El nombre no es válido";
    } else if (userData.nombre.length > 35) {
      errors.nombre = "El nombre no puede tener más de 35 caracteres";
    }
    if (!userData.estacion) {
      errors.estacion = "La estación del año es requerida";
    } else if (userData.estacion.length < 5 || userData.estacion.length > 10) {
      errors.estacion =
        "La estación del año, debe tener entre 5 y 10 caracteres";
    } else if (
      userData.estacion !== "verano" &&
      userData.estacion !== "otoño" &&
      userData.estacion !== "primavera" &&
      userData.estacion !== "invierno"
    ) {
      errors.estacion =
        "Esa no es una estación del año válida, te doy una pista (invierno/primavera/verano/otoño)";
    }
    return errors;
  };

  const isValidNombre = (nombre) => {
    return true;
  };

  const notify = () => {
    toast.success(
    `¡Genial, ${userData.nombre}! ¡Excelente elección!. ${userData.estacion} es una época maravillosa del año.`,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        }
    );
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <div>
        <img
          src={nubesPortfolio}
          alt="nubes Index"
          className="planetLogin-image"
        />
      </div>
      <div>
        <img
          src={pedroCavataio}
          alt="pedroIndex"
          className="nombre-image"
        />
      </div>
      <div className="contenedor">
        <div className="login-group">
          <label htmlFor="nombre">
            {" "}
            ¿Cuál es tu nombre?
          </label>
          <input
            placeholder="nombre"
            type="text"
            id="nombre"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            className="login-input"
            disabled={access}
            autoFocus
          />
          {errors.nombre && (
            <span className="error-message">{errors.nombre}</span>
          )}
        </div>
        <div className="login-group">
          <label htmlFor="estacion">
            ¿Cuál es tu estación del año favorita?
          </label>
          <input
            placeholder="estación"
            type="text"
            id="estacion"
            name="estacion"
            value={userData.estacion}
            onChange={handleChange}
            className="login-input"
            disabled={access}
            autoFocus
          />
          {errors.estacion && (
            <span className="error-message">{errors.estacion}</span>
          )}
        </div>
      </div>
      <button className="login-button" disabled={access}>
        Ingresar
      </button>
      <div>
        <ToastContainer />
      </div>
    </form>
  );
};

export default Login;
