const { Router } = require("express");

const activitiesRouter = require("./activitiesRouter");
const countriesRouter = require("./countriesRouter");
const loginRouter = require("./loginRouter");

const router = Router();


router.use("/", activitiesRouter);
router.use("/", countriesRouter);
router.use("/", loginRouter);


module.exports = router;

