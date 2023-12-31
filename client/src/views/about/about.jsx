import React from 'react';
import { useNavigate } from 'react-router-dom';
import fotoPedro from '../../assets/fotoPedro.jpg';
import './about.styles.css';

const About = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="about-container">
      <img src={fotoPedro} alt="Foto Pedro Cavataio" className="profile-image" />
      <h2 class="nameAbout"> "Pedro Cavataio" </h2>
      <div className="contAbout-texto">
      <p>
      ¡Hola! Soy Pedro y estoy emocionado por adentrarme en la industria del desarrollo. Aunque mi experiencia previa no es en este sector, considero que mi amplia trayectoria profesional me brinda una valiosa perspectiva y habilidades transferibles. Estoy comprometido con el aprendizaje continuo y ansioso por contribuir al crecimiento y éxito de los proyectos en los que participe. ¡Listo para asumir nuevos desafíos y hacer una diferencia en el mundo del desarrollo!
      </p>
          <div className="about-list">
            <ul>
              <li>React.</li>
              <li>AJAX.</li>
              <li>Métodos HTTP.</li>
              <li>Eventos.</li>
              <li>Módulos/Blunders.</li>
              <li>Exportación.</li>
              <li>Webpack.</li>
              <li>Componentes.</li>
              <li>Webpack.</li>
              <li>Legacy.</li>
              <li>Inline Styling.</li>
              <li>CSS modules.</li>
              <li>Styled Components.</li>
              <li>Estado.</li>
              <li>LifeCicle.</li>
              <li>Hooks.</li>
              <li>Configuración.</li>
              <li>Navegación.</li>
              <li>Formularios.</li>
              <li>Keys.</li>
              <li>Redux.</li>
              <li>Flow de Redux.</li>
              <li>ES6.</li>
              <li>Routing.</li>
              <li>Forms.</li>
              <li>Node JS.</li>
              <li>Promises.</li>
              <li>Express.</li>
              <li>Async Await.</li>
              <li>Testing.</li>
              <li>SQL.</li>
              <li>Posgrest.</li>
            </ul>
            </div>
          </div>
      <button className="enter-button-about" onClick={handleEnter}>
        <span className="enter-button-about-text">Go Home</span>
      </button>
    </div>
  );
};

export default About;
