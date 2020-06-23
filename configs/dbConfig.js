const Sequelize = require("sequelize");

module.exports = new Sequelize(
  `postgres://${process.env.USER}:${process.env.PASSWORD}@ruby.db.elephantsql.com:5432/${process.env.DB}`,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    //   operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

