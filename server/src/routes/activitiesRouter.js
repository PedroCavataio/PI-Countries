const { Router } = require("express");

const{ createActivity, getActivities } = require("../handlers/handlersActivities");

const activitiesRouter = Router();


activitiesRouter.post("/activity", createActivity);
activitiesRouter.get("/activities", getActivities);


module.exports = activitiesRouter;