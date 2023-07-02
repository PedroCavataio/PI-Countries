import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import React from "react";
import Card from "../../components/card/card.component";
import styles from "../home/home.styles.css";
import FotoHome from "../../assets/LandingyHome.jpg";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [nameOrder, setNameOrder] = useState(true);
  const [populationOrder, setPopulationOrder] = useState(true);

  const cardsPerPage = 10;

  useEffect(() => { 
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  useEffect(() => {
    if (allCountries.length < 10) {
      setCurrentPage(1);
    }
  }, [allCountries]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const displayedCards = allCountries.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = Math.ceil(allCountries.length / cardsPerPage);

  const renderPageNumbers = () => {
    return Array.from({ length: pageNumbers }, (_, index) => (
      <li
        key={index}
        className={currentPage === index + 1 ? "active" : ""}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </li>
    ));
  };

  const nextPage = () => {
    if (currentPage < pageNumbers) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderPaginationButtons = () => {
    return (
      <div className="pagination-container">
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
          ❮
          </button>
          <ul className="page-numbers">{renderPageNumbers()}</ul>
          <button onClick={nextPage} disabled={currentPage === pageNumbers}>
          ❯
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container-principal">
      <div className={styles.sidebar}></div>
      <div className="countries">
        {displayedCards &&
          displayedCards.map((country) => (
            <Card
              key={country.id}
              id={country.id}
              name={country.name}
              flag={country.flag}
              continent={country.continent}
            />
          ))}
      </div>

      {renderPaginationButtons()}
    </div>
  );
}

export default Home;
