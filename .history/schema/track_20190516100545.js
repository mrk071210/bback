module.exports = (sequelize, DataTypes) => {
  return sequelize.define('track',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    position:{
      type:DataTypes.Array,
      allowNull:false,
      field:'position'
    },
    speed:{
      type:DataTypes.BIGINT,
      allowNull:true
    },
    accuracy:{
      type:DataTypes.BIGINT,
      allowNull:true
    },
    phoneType:{
      type:DataTypes.STRING,
      allowNull:true
    }
  })
}