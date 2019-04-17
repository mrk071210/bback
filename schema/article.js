const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('article',{
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
    },
    image:{
        type:DataTypes.STRING,
        field:'image'
    },
    description:{
      type:DataTypes.STRING,
      field:'description'
    },
    content:{
      type:DataTypes.TEXT,
      field:'content'
    },
    tag:{
      type:DataTypes.STRING,
      field:'tag'
    },
    flag:{
      type:DataTypes.INTEGER,
      allowNull:false,
      field:'flag',
      defaultValue: 1
    },
    author:{
      type:DataTypes.STRING,
      allowNull:true,
      field:'author'
    }
  })
}