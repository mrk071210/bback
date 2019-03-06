const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('origin',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    origin:{
      type:DataTypes.STRING,
      allowNull:false,
      field:'origin'
    },
    count:{
      type:DataTypes.BIGINT,
      allowNull:false
    }
  })
}