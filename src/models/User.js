const { Sequelize } = require("sequelize");

const { Model } = require("sequelize");

class User extends Model {
  //Conectar com o DB
  static init(connection) {}
}

module.exports = USer;
