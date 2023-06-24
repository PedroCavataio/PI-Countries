const { Country, Activity, Op, sequelize } = require("../db");

const searchCountry = async (req, res) => {
  const { name } = req.query;

  try {
    const countries = await Country.findAll({
      where: sequelize.literal(`LOWER("name") = LOWER('${name}')`),
      where: {
        name: {
          /* [Op.iLike]: `%${name}%`, */
        },
      },
    });
    if (countries.length === 0) {
      res.status(404).json({ error: "No se encontró ningún país que coincida con: " + name });
    } else {
      res.status(200).json(countries);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los países de la base de datos // SEARCH COUNTRY " + error });
  }
};

module.exports = {
  searchCountry,
};
