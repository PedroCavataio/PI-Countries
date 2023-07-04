//////////////////////////////////////////////////////////////////////////////
// el handler extrae informacion del endpoint y luego invoca al controlador!!!!
//////////////////////////////////////////////////////////////////////////////

const { Country, Activity, Op, sequelize } = require("../db");
const countryController = require("../controllers/countryController");

const allCountries = async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      countryController.searchCountry(req, res);
    } else {
      const countries = await Country.findAll();
      res.status(200).json(countries);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los países de la base de datos // ALL COUNTRIES" + error });
  }
};

const countrieId = async (req, res) => {
  const { idPais } = req.params;

  try {
    const country = await Country.findOne({
      where: sequelize.where(sequelize.fn('LOWER', sequelize.col('id')), idPais.toLowerCase()),  
        include: Activity,
    });
    if (!country) {
      res.status(404).json({ error: "País no encontrado" });
    } else {
      res.status(200).json(country);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el país de la base de datos // FIND ONE COUNTRY" + error });
  }
};

module.exports = {
  allCountries,
  countrieId,
};
