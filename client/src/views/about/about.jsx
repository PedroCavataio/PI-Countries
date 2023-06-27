import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.styles.css';
import fotoPedro from '../../assets/fotoPedro.jpg';

const About = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="about-container">
      <img src={fotoPedro} alt="Foto de Pedro Cavataio" className="profile-image" />
      <h2 className="nameAbout">Pedro Cavataio</h2>
      <div className="contAbout">
      <p>
        Tecnologías utilizadas, etc.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque in minus unde rerum nam dolorem deserunt tempora ad reprehenderit, earum est aliquid odio illum quasi assumenda! Cum, quos. Amet, autem.
      </p>
          <div className="about-list">
            <ul>
              <li>React.</li>
              <li>AJAX.</li>
              <li>Métodos HTTP.</li>
              <li>Eventos.</li>
              <li>Módulos.</li>
              <li>Exportación.</li>
              <li>Webpack.</li>
              <li>Componentes.</li>
              <li>Webpack.</li>
              <li>Legacy.</li>
              <li>Inline Styling.</li>
              <li>CSS modules.</li>
              <li>Styled Components.</li>
              <li>Estado.</li>
              <li>Ciclo de vida.</li>
              <li>Hooks.</li>
              <li>Configuración.</li>
              <li>Navegación.</li>
              <li>Formularios.</li>
              <li>Keys.</li>
              <li>Redux.</li>
              <li>Flow de Redux.</li>
            </ul>
            </div>
          </div>
      <button className="enter-button-about" onClick={handleEnter}>
        <span className="enter-button-about-text">Go Home</span></button>
    </div>
  );
};

export default About;
