const { DataTypes } = require("sequelize");

const Activity = (sequelize) => {  
   sequelize.define('Activity', {

  id: {
    type: DataTypes.UUID,    //(Universally Unique Identifier) identificador único 
    defaultValue: DataTypes.UUIDV4,   //se generan de forma completamente aleatoria
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  season: {
    type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
    allowNull: false,
  },
},

{timestamps: false });

};

module.exports = Activity; 