const { Router } = require("express");

const{ postHandlerCreateActivities, getHandlerActivities } = require("../handlers/handlersActivities");

const activitiesRouter = Router();


activitiesRouter.post("/activities", postHandlerCreateActivities);
activitiesRouter.get("/activities", getHandlerActivities);


module.exports = activitiesRouter;