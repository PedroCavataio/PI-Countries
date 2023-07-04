import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actions";
import styles from "./countryDetails.styles.module.css";
import { useNavigate } from 'react-router-dom';

const CountryDetails = ({}) => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.selectedCountry);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountryById(getCountryId()));
  }, []);

  function getCountryId() {
    const url = window.location.pathname.split("/"); 
    const countryId = url.pop(); 
    return countryId;
  }

  if (!country) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className={styles["country-details-container"]}>
      <div className={styles["country-details-horizontal"]}>
      <button className={styles["closeButton-detail"]} onClick={handleGoBack}>X</button>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <div className={styles["contenedor-closeButton-detail"]}>
        <p className={styles["country-info-id"]}>ID: {country.id}</p>
        <p className={styles["country-info-continent"]}>Continent: {country.continent}</p>
        <p className={styles["country-info-capital"]}>Capital: {country.capital}</p>
        {country.subregion && <p className={styles["country-info-subregion"]}>Subregion: {country.subregion}</p>}
        {country.area && <p className={styles["country-info-area"]}>Area: {country.area}</p>}
        <p className={styles["country-info-poblacion"]}>Population: {country.population}</p>
      </div>
      </div>
    </div>
  );
};

export default CountryDetails;

