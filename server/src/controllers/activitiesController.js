const { Activity } = require("../db");

const createActivity = async (activityData, countryIds) => {
  const newActivity = await Activity.create(activityData);
  await newActivity.addCountries(countryIds);
  return newActivity;
};

const getActivities = async () => {
  const activities = await Activity.findAll();
  if (activities.length === 0) {
    throw new Error("No hay ninguna actividad aún");
  }
  return activities;
};

module.exports = {
  createActivity,
  getActivities,
};
