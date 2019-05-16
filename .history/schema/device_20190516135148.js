module.exports = (sequelize, DataTypes) => {
    return sequelize.define('device',{
      uuid:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        field:'phone_uuid'
      },
      model:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'phone_model'
      },
      system:{
        type:DataTypes.STRING,
        allowNull:true,
        field:'phone_system'
      }
    })
  }