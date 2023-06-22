const { Router } = require("express");

const { allCountries, countrieId } = require("../handlers/handlersCountries");

const countriesRouter = Router();


countriesRouter.get("/countries", allCountries);
countriesRouter.get("/countries/:idPais", countrieId);


module.exports = countriesRouter;