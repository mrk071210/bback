const trackModel = require('../models/track');
const util = require('util')
class trackController {
  //创建
  static async create(data){
    // if(req.name && req.tag && req.realName){
      try{
        trackModel.createTrack(data);
      } catch(err){
      }
  }
  
}
module.exports = trackController;