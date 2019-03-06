const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('organization',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    shortName:{
      type:DataTypes.STRING
    },
    desc:{
      type:DataTypes.TEXT
    },
    pId:{
      type:DataTypes.INTEGER,
      defaultValue: 1
    },
    dropFlag:{
      type:DataTypes.INTEGER(1),
      defaultValue: 0
    },
    open:{
      type:DataTypes.INTEGER(1),
      defaultValue: 0
    }
  })
}