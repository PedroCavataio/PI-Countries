const { DataTypes } = require("sequelize");

const Country = (sequelize) => {  
   sequelize.define('Country', {

    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagImage: {
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
    },
  },
  {timestamps: false });

};

module.exports = Country; 