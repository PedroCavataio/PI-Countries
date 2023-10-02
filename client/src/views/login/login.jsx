import React, { useState } from 'react';
import './login.styles.css'; 
import fotoMundo from "../../assets/mundoLogin.avif"

const Login = ({ onLogin, access }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
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
      setUserData({ email: '', password: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateLogin = () => {
    const errors = {};

    if (!userData.email) {
      errors.email = 'El email es requerido';
    } else if (!isValidEmail(userData.email)) {
      errors.email = 'El email no es válido';
    } else if (userData.email.length > 35) {
      errors.email = 'El email no puede tener más de 35 caracteres';
    }

    if (!userData.password) {
      errors.password = 'La contraseña es requerida';
    } else if (!hasNumber(userData.password)) {
      errors.password = 'La contraseña debe contener al menos un número';
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    return true;
  };

  const hasNumber = (str) => {
    return /\d/.test(str);
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <div>
         <img src={fotoMundo} alt="Foto Mundo Longin" className="planetLogin-image"/>
      </div>
       <div className="contenedor">
          <div className="login-group">
            <label htmlFor="email">Email:  (<span style={{ color: 'green' }}>ejemplo@gmail.com</span>)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="login-input"
              disabled={access}
              autoFocus
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
            <div className="login-group">
              {/* <label htmlFor="password">Password: (123456)</label> */}
              <label htmlFor="password">Password: (<span style={{ color: 'green' }}>123456</span>)</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="login-input"
                disabled={access}
                autoFocus
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <button type="submit" className="login-button" disabled={access}>
              Submit
            </button>
          </div>
    </form>
  );
};

export default Login;
