const { Sequelize, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const CountryActivity = (sequelize) => {
  sequelize.define('CountryActivity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    
  },
  {timestamps: false });
};

module.exports = CountryActivity;
