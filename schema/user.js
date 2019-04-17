const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user',{
    id:{
      type:DataTypes.CHAR(36),
      primaryKey:true,
      allowNull:false,
      field:'id',
      // references: {
      //   // 引用另一个模型
      //   model: wxUser,
      //   // 连接模型的列表
      //   key: 'userId'
      // }
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