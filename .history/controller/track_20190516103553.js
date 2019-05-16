const trackModel = require('../models/track');
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
  
}
module.exports = trackController;