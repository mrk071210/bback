const db = require('../config/db')
const Sequelize = db.sequelize;
const Track = Sequelize.import('../schema/track'); 
// Track.sync({ force: true }); 

class TrackModel {
  // 新增
  static addTrack(data){
    return Track.create(data);
  }
  // 根据uuid查询
  static async findTrackById(uuid){
    return await Track.findAll({
        attributes: [['position', 'point']],
      where: uuid
    });
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