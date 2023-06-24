const { Router } = require("express");

const { loginFunc } = require("../handlers/handlerLogin")

const loginRouter = Router();


loginRouter.get("/login", loginFunc);


module.exports = loginRouter;



