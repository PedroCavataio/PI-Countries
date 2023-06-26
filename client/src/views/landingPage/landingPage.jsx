import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landinPage.styles.css';

const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home'); 
  };

  return (
    <div className="landing-page">
        <div className='container'>
      <h1 className="title">#SoyHenry!</h1>
      <h2 className="description">Bienvenidos al Proyecto Individual</h2>
      <h2 className="description">Tema: Countries</h2>
      <h4 className="sub-description">Carrera: Desarrollo Full Stack</h4>
      <h4 className="sub-description">Alumno: Pedro Francisco Cavataio</h4>
      <button className="enter-button" onClick={handleEnter}>
        Ingresar
      </button>
      </div>
    </div>
  );
};

export default Landing;

