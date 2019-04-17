const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('wxUser',{
    userId:{
      type:DataTypes.CHAR(36),
      primaryKey:true,
      allowNull:false,
      defaultValue: sequelize.UUIDV1
    },
    openId:{
      type:DataTypes.CHAR(36),
      allowNull:false
    }
})
}