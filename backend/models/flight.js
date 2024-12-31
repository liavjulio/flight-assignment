'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    name: DataTypes.STRING,
    departure: DataTypes.STRING,
    arrival: DataTypes.STRING,
    price: DataTypes.FLOAT,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Flight',
    tableName: 'Flights',
    timestamps: true // Ensure timestamps are handled
  });
  return Flight;
};