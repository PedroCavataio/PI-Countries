  
//*********************************************************** */
//DIFERENCIA ENTRE HANDLER Y CONTROLLER:  

  //  EL HANDLER SE ENCARGA DE: - RECIBIR LA REQUEST
  //                            - UNIFICAR DATOS
  //                            - DEVOLVER LA RESPUESTA
  // LA INFO LA CONSIGUE INVOCANDO AL CONTROLLER 
  //              ¡¡¡¡NUNCA, INTEREACTUA CON FUENTES EXTERNAS (API/BASE DE DATOS => ESO LO HACE EL CONTROLLER (QUE ES NI MAS NI MENOS UNA FUNCTION) 
  //
  //*********************************************************** */


  const postHandlerCreateActivities = (req, res) => {
    res.status(200).send("esto es postHandlerCreateActivities");
  };

  const getHandlerActivities = (req, res) => {
    res.status(200).send("esto es gethandlerActivities");
  };

  module.exports = {
    postHandlerCreateActivities,
    getHandlerActivities
   };