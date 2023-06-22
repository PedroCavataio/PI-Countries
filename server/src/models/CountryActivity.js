const { Sequelize, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const CountryActivity = (sequelize) => {
  sequelize.define('CountryActivity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    // Otras columnas que desees agregar a la tabla CountryActivitys
  },
  {timestamps: false });
};

module.exports = CountryActivity;
