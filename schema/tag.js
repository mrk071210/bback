const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tag',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false,
      field:'title'
    }
  })
}