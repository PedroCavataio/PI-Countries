import './countryDetails.styles.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({ countryId }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/countries/${countryId}`);
        const { data } = response;
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryDetails();
  }, [countryId]);

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
