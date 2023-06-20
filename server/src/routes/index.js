const { Router } = require("express");

const activitiesRouter = require("./activitiesRouter");
const countriesRouter = require("./countriesRouter");
const loginRouter = require("./loginRouter");

const router = Router();


router.use("/activities", activitiesRouter);
router.use("/countries", countriesRouter);
router.use("/login", loginRouter);


module.exports = router;

