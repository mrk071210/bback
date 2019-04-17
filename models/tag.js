const db = require('../config/db')
const Sequelize = db.sequelize;
const Tag = Sequelize.import('../schema/tag'); 
// Tag.sync({ force: false }); 

class TagModel {
  // 新增
  static async createTag(data){
    return await Tag.bulkCreate(data);
  }
  // 查询所有
  static async findAllTag(){
    return await Tag.findAll({
      attributes: { exclude: [''] }
    });
  }
  // 根据id查询
  static async findTag(id){
    return await Tag.findAll({
      where: { id }
    });
  }
}
  
module.exports = TagModel;