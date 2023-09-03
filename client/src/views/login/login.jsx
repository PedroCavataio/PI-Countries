import React, { useState } from 'react';
import './login.styles.css'; 
import fotoMundo from "../../assets/mundoLogin.avif"

const Login = ({ onLogin, access }) => {
  const [userData, setUserData] = useState({ nombre: '', estacion: '' });
  const [errors, setErrors] = useState({});

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
      onLogin(userData);
      setUserData({ nombre: '', estacion: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateLogin = () => {
    const errors = {};

    if (!userData.nombre) {
      errors.nombre = 'El nombre es requerido';
    } else if (!isValidNombre(userData.nombre)) {
      errors.nombre = 'El nombre no es válido';
    } else if (userData.nombre.length > 35) {
      errors.nombre = 'El nombre no puede tener más de 35 caracteres';
    }

    if (!userData.estacion) {
      errors.estacion = 'La estación del año es requerida';
    } else if (userData.estacion.length < 5 || userData.estacion.length > 10) {
      errors.estacion = 'La estación del año, debe tener entre 5 y 10 caracteres';
    } else if (
      userData.estacion !== "verano" &&
      userData.estacion !== "otoño" && 
      userData.estacion !== "primavera" &&
      userData.estacion !== "invierno"
      ) {
        errors.estacion = 'Esa no es una estación del año válida, te doy una pista (invierno/primavera/verano/otoño)';
    }
    return errors;
  };

  const isValidNombre = (nombre) => {
    return true;
  };


  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <div>
         <img src={fotoMundo} alt="Foto Mundo Longin" className="planetLogin-image"/>
      </div>
       <div className="contenedor">
          <div className="login-group">
            <label htmlFor="nombre"> "¿Cuál es tu nombre?"</label>
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
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>
            <div className="login-group">
              <label htmlFor="estacion">"¿Cuál es tu estación del año favorita?"</label>
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
              {errors.estacion && <span className="error-message">{errors.estacion}</span>}
            </div>
            <button type="submit" className="login-button" disabled={access}>
              Ingresar
            </button>
          </div>
    </form>
  );
};

export default Login;
