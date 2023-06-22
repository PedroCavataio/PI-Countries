const { Sequelize, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Activity = (sequelize) => {  
   sequelize.define('Activity', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: {
      isValidSeasons(value) {
        const validSeasons = ['Summer', 'Winter', 'Spring', 'Fall'];
        for (const season of value) {
          if (!validSeasons.includes(season)) {
            throw new Error(`Invalid season: ${season}`);
          }
        }
      },
    },
  },
  countryIds: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  }
},

{timestamps: false });

};

module.exports = Activity; 