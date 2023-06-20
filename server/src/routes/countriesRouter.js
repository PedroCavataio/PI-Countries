const { Router } = require("express");

const { countrieFunc, countrieSearch, countrieName } = require("../handlers/handlersCountries");

const countriesRouter = Router();


countriesRouter.get("/countries", countrieFunc);
countriesRouter.get("/countries/:idPais", countrieSearch);
countriesRouter.get("/countries/name?='...'", countrieName);


module.exports = countriesRouter;