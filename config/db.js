const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  'mmmt',
  'root',
  'kk071210',
  {
    dialect: 'mysql',
    host:'localhost',
    port: 3306,
    timestamp:true,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
  }
);
module.exports = { sequelize };