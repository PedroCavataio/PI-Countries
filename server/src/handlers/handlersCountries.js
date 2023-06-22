//////////////////////////////////////////////////////////////////////////////
// el handler extrae informacion del endpoint y luego invoca al controlador!!!!
//////////////////////////////////////////////////////////////////////////////

const { Country, Activity, Op } = require ("../db");   

const allCountries = async (req, res) => {   
  try {
    const { name } = req.query;

    if(name) {
      searchCountry(req, res)
    } else {
      const countries = await Country.findAll();
      res.status(200).json(countries);
    }
  } catch (error) {
    res.status(500).json({error: "Error al obtener los países de la base de datos // ALL COUNTRIES" + error});   
  }
};


  const countrieId = async (req, res) => {      
    const {idPais} = req.params;    
    
    try {
      const country = await Country.findOne({
        where: { id: idPais },
        include: Activity,
      });
      if(!country) {
        res.status(404).json({error: "País no encontrado"});
      }else {
        res.status(200).json(country);
      }
    } catch (error) {
      res.status(500).json({error: "Error al obtener el paìs de la base de datos // FIND ONE COUNTRY" + error});
    }
  };


  const searchCountry = async (req, res) => {
    const { name } = req.query;

    try {
      const countries = await  Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          }
        }
      });
      if (countries.length === 0) {
        res.status(404).json({ error: "No se encontró ningun país que coincida con: " + name});
      } else {
        res.status(200).json(countries);
      }
    } catch (error) {
      res.status(500).json({error: "Error al obtener los países de la base de datos // SEARCH COUNTRY " + error});
    }
  };

  module.exports = {
    allCountries,
    countrieId,
    searchCountry
   };

  