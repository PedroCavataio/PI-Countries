const { Sequelize, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Country = (sequelize) => {  
   sequelize.define('Country', {

    id: {
      type: DataTypes.STRING, //UUID,  
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4()
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    flag: {
      type: DataTypes.STRING,  
      allowNull: false,
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get() {                                           
        const value = this.getDataValue("population");       
        return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : null;
      }
    },

  },
  {timestamps: false });

};

module.exports = Country; 