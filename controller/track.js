const trackModel = require('../models/track');
const statusCode = require('../utils/response')
const util = require('util')
class trackController {
  //创建
  static create(data){
    // if(req.name && req.tag && req.realName){
      try{
        trackModel.addTrack(data);
      } catch(err){
      }
  }
  //根据UUID查询
  static async getById(ctx){
    let req = ctx.request.body;
    if(req.uuid){
      try{
        let ret = await trackModel.findTrackById(req.uuid);
        if(ret){
            let points = []
            ret.forEach(item => {
                points.push({
                    latitude:Number(item.dataValues.point[1]),
                    longitude:Number(item.dataValues.point[0])
                })
            })
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS('200','查找成功',points);
        }
      } catch(err){
      }
    }
  }
  
}
module.exports = trackController;