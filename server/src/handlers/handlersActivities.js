  
//*********************************************************** */
//DIFERENCIA ENTRE HANDLER Y CONTROLLER:  

  //  EL HANDLER SE ENCARGA DE: - RECIBIR LA REQUEST
  //                            - UNIFICAR DATOS
  //                            - DEVOLVER LA RESPUESTA
  // LA INFO LA CONSIGUE INVOCANDO AL CONTROLLER 
  //              ¡¡¡¡NUNCA, INTEREACTUA CON FUENTES EXTERNAS (API/BASE DE DATOS => ESO LO HACE EL CONTROLLER (QUE ES NI MAS NI MENOS UNA FUNCTION) 
  //
  //*********************************************************** */

const { Activity } = require ("../db");   


  const createActivity = async(req, res) => {
    try {
      const { body } = req;
      const { countryIds } = body;

      const newActivity = await Activity.create(body);

      await newActivity.addCountries(countryIds);
      res.status(201).json(newActivity);

    } catch (error) {
      res.status(500).json({ error: 'Error al crear una nueva actividad' + error });
    }
  }

  const getActivities = async(req, res) => {
    try {
      const activities = await Activity.findAll();
  
      if(activities) {
        res.status(200).json(activities);
      } else {
        resizeTo.status(404).json({error: "No hay ninguna actividad aún"})
      }
    } catch (error) {
        res.status(500).json({ error: 'Error al encontrar las actividades ' + error });
    }
  };

  module.exports = {
    createActivity,
    getActivities
   };