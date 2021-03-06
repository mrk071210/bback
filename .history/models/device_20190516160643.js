const db = require('../config/db')
const Sequelize = db.sequelize;
const device = Sequelize.import('../schema/device'); 
// device.sync({ force: true }); 

class deviceModel {
  // 新增
  static addDevice(data){
    return device.create(data);
  }
  // 查询所有
  static async findAllDevice(){
    return await device.findAll({
      attributes: { exclude: [''] }
    });
  }
}
  
module.exports = deviceModel;