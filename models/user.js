const db = require('../config/db')
const Sequelize = db.sequelize;
const User = Sequelize.import('../schema/user'); 
// User.sync({ force: false }); 

class UserModel {
  // 用户模型
  static async createUser(data){
    return await User.create({
      userName: data.userName,
      password: data.password,
      realName: data.realName,
    });
  }
  //登录
  static async findUserByName(userName){
    return await User.findOne({
      where:{userName}
    });
  }
  //根据id询用户
  static async getUserInfo(id){
    return await User.findOne({
      where:{id}
    });
  }
}
module.exports = UserModel;