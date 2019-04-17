const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  'postgres',
  'calamus',
  'kk071210',
  {
    dialect: 'postgres',
    host:'localhost',
    port: 5432,
    timestamp:true,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
  }
);
module.exports = { sequelize };