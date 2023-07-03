import React from "react";
import "./card.styles.css";
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const { flag, name, continent, id } = props;
  const navigate = useNavigate();

  const navigateToDetail = () =>  {
    navigate(`/home/${id}`); 
  } 

  return (
    <div className="card-container">
       <div className="card" onClick={navigateToDetail}>
          <img className="card-image" src={flag} alt="Flag"/>
          <h2 className="card-title">{name}</h2>
          <p className="card-continent">{continent}</p>
        </div>
    </div>
  );
}

export default Card;
 
