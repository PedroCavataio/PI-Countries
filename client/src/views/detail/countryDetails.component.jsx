import "./countryDetails.styles.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actions";

import axios from "axios";

const CountryDetails = ({ countryId }) => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.selectedCountry);

  useEffect(() => {
    dispatch(getCountryById(getCountryId()));
  }, []);

  function getCountryId() {
    const url = window.location.pathname.split("/"); // Obtener la ruta de la URL actual
    const countryId = url.pop(); // Eliminar y obtener el último fragmento de la matriz

    return countryId;
  }

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <p>ID: {country.id}</p>
      <p>Continent: {country.continent}</p>
      <p>Capital: {country.capital}</p>
      {country.subregion && <p>Subregion: {country.subregion}</p>}
      {country.area && <p>Area: {country.area}</p>}
      <p>Population: {country.population}</p>
    </div>
  );
};

export default CountryDetails;
