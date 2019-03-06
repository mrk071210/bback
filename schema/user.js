const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    userName:{
      type:DataTypes.STRING,
      allowNull:false,
      field:'userName'
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      field:'password'
    },
    realName:{
      type:DataTypes.STRING,
      allowNull:false,
      field:'realName'
    }
  })
}