const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'kk071210',
  {
    dialect: 'postgres',
    host:'119.3.235.231',
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