import "./card.styles.css";
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const { flag, name, continent, id } = props;
  const navigate = useNavigate();

  const navigateToDetail = () =>  {
    navigate(`/home/${id}`); 
  } 

  return (
    <div className="card-container" onClick={navigateToDetail}>
      <img className="card-image" src={flag}/>
      <h2>{name}</h2>
      <p>{continent}</p>
    </div>
  );
}

export default Card;
