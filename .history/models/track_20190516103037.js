const db = require('../config/db')
const Sequelize = db.sequelize;
const Tag = Sequelize.import('../schema/track'); 
// Tag.sync({ force: false }); 

class TrackModel {
  // 新增
  static async addTrack(data){
    return await Track.create(data);
  }
  // 查询所有
  static async findAllTrack(){
    return await Track.findAll({
      attributes: { exclude: [''] }
    });
  }
  // 根据时间查询
  static async findTrack(time){
    return await Track.findAll({
      where: { time }
    });
  }
}
  
module.exports = TrackModel;