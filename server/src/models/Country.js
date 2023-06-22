const { Sequelize, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Country = (sequelize) => {  
   sequelize.define('Country', {

    id: {
      type: DataTypes.STRING(3), //UUID,  
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4()
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    flag: {
      type: DataTypes.STRING,  //tener en cuenta "BLOB" para almacenar directamente la imagen en la base de datos
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
      get() {                                           //para mostrar el número en una página web, puedes utilizar la función toLocaleString() para formatear el número con separador de miles
        const value = this.getDataValue("population");         //const formattedPopulation = population.toLocaleString();
        return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : null;
      }
    },

  },
  {timestamps: false });

};

module.exports = Country; 