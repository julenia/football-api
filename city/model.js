const Sequelize = require('sequelize')
const db = require('../db')
const City = db.define(
  'city',
  {
    name: {
      type: Sequelize.STRING,
      field: 'city_name'
    },
    population: {
      type: Sequelize.INTEGER,
      field: 'city_population'
    }
  },
  { tableName: 'cities', timestamps: false }
  
);

module.exports = City