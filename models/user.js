'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    spotifyId: DataTypes.STRING,
    email: DataTypes.STRING,
    genre1: DataTypes.STRING,
    genre2: DataTypes.STRING,
    genre3: DataTypes.STRING,
    songTitles: DataTypes.STRING,
    albums: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};