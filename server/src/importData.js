const axios = require('axios');
const { Country } = require('./db'); // Importa el modelo del país de tu base de datos

const fetchAndSaveCountries = async () => {
  try {
    const response = await axios.get('http://localhost:5000/countries'); // Realiza la petición a la API - Reemplaza "http://api.example.com/countries" con la URL de la API real
    const countries = response.data; // Obtiene los países de la respuesta
    
    const countriesMapeados = countries.map((country) => {
      const countryMapeado = {
        id: country.cca3,
        name: country.name.official,
        flag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital === undefined ? country.capital = 'no-capital' : country.capital = country.capital[0],
        population: country.population,
    }
    return countryMapeado;
    })
    
    const savedCountries = await Country.bulkCreate(countriesMapeados);  // Guarda los países en la base de datos
      //res.status(200).send('Países guardados correctamente en la base de datos.');
    
  } catch (error) {
    console.error('Error en fetchAndSaveCountries-->', error);

    if (error.response && error.response.status === 404) {
      res.status(404).send('La API de países no está disponible.');
    } else {
      res.status(500).send('Error al obtener los países de la API: ' + error.message);
    }    
  }  
};

module.exports = fetchAndSaveCountries;

