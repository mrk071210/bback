const db = require('../config/db')
const Sequelize = db.sequelize;
const Origin = Sequelize.import('../schema/origin'); 
// Origin.sync({ force: false });  

class OriginModel {
  // 来源模型
  static async createOrigin(data){
    return await Origin.create({
      origin: data.origin,
      count:data.count
    })
  }
  //查询来源信息
  static async findOriginByName(origin) {
    return await Origin.findOne({
        where: {
          origin
        }
    })
  }
//更新来源计数
static async updateOriginCount(id) {
  return await Origin.update({count:Sequelize.literal('`count`+1')},{
      where: {
        id
      }
  }).then(ok => console.error('update origin success'))
  .catch(error => console.dir(error))
}
}
 
module.exports = OriginModel;