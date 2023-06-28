import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import React from "react";
import Card from "../../components/card/card.component";
import styles from "./home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);

  const [currentPage, setCurrentPage] = useState(1);
  const [nameOrder, setNameOrder] = useState(true);
  const [populationOrder, setPopulationOrder] = useState(true);

  const [continents, setContinents] = useState([]);
  const [activitiesSelected, setActivitiesSelected] = useState([]);

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

  // useEffect(() => {
  //   allCountries = allCountries.filter(country => continents.includes(country.continent));
  //   console.log('COUNTRIES FILTRADOS POR CONTINENTE--->', allCountries)
  // }, [continents])

  // useEffect(() => {  

  // }, [activitiesSelected])

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

  const sortByName = () => {
    setNameOrder(!nameOrder);
    return allCountries.sort(function (a, z) {
      if (nameOrder) {
        return a.name.localeCompare(z.name);
      } else {
        return z.name.localeCompare(a.name);
      }
    });
  };

  const sortByPopulation = () => {
    setPopulationOrder(!populationOrder);
    return allCountries.sort(function (a, z) {
      const poblacionA = a.population
        ? parseFloat(a.population.replace(/\./g, ""))
        : (a.population = 0);
      const poblacionZ = z.population
        ? parseFloat(z.population.replace(/\./g, ""))
        : (z.population = 0);
      if (populationOrder) {
        return poblacionA - poblacionZ;
      } else {
        return poblacionZ - poblacionA;
      }
    });
  };

  const renderPaginationButtons = () => {
    return (
      <div className="pagination-container">
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <ul className="page-numbers">{renderPageNumbers()}</ul>
          <button onClick={nextPage} disabled={currentPage === pageNumbers}>
            Next
          </button>
        </div>
      </div>
    );
  };

  const renderSortButtons = () => {
    return (
      <div className="sort-buttons">
        <button onClick={sortByName}>Sort by Name</button>

        <button onClick={sortByPopulation}>Sort by Population</button>
      </div>
    );
  };

  const handleContinentFilter = (event) => {
    const selectedContinents = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setContinents(selectedContinents);
  };

  const handleActivityFilter = (event) => {
    const selectedActivities = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setActivitiesSelected(selectedActivities);
  };

  const renderFilterButtons = () => {
    return (
      <div className="filter-buttons">
        <label>
          Continents:
          <select multiple value={continents} onChange={handleContinentFilter}>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </label>

        <label>Activities:</label>
        <select
          multiple
          value={activitiesSelected}
          onChange={handleActivityFilter}
        >
          {activities.map((activity) => {
            return <option value={activity.id}>{activity.name}</option>;
          })}
        </select>
      </div>
    );
  };

  return (
    <div className={styles.home}>
      {renderSortButtons()}
      {renderFilterButtons()}
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
