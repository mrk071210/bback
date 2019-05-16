const deviceModel = require('../models/device');
const util = require('util')
class deviceController {
  //创建
  static async create(ctx,next){
    let data = ctx.request.body
      try{
        await deviceModel.addDevice(data);
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','绑定成功');
      } catch(err){
      }
  }
}
module.exports = deviceController;