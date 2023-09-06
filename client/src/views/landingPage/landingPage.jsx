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
      <div className='container-landing'>
        <h2 className="description-landing">Bienvenidos al Proyecto Individual</h2>
        <h1 className="title-landing">"Countries"</h1>
        <h2 className="sub-description">By Pedro Francisco Cavataio</h2>
        <h3 className="descriptionH"><a href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=Brand&gad=1&gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF_GWZ-MKGdG13wh7BrKQq-0ogMsxu2AKchOIyka-B0e6GRDFq-TwRgaAizNEALw_wcB" target="_blank" rel="noopener noreferrer">
        #SoyHenry!</a>
        </h3>
        <h4 className="sub-description">Desarrollo Full Stack</h4>
          <button className="enter-button-landing" onClick={handleEnter}>
          get into
          </button>
      </div>
    </div>
  );
};

export default Landing;

