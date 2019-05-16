const deviceModel = require('../models/device');
const util = require('util')
class deviceController {
  //创建
  static async create(ctx,next){
    let data = ctx.request.body
      try{
        let ret = await deviceModel.addDevice(data);
        if(ret){
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS('200','绑定成功');
        }else{
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS('201','绑定失败');
        }
      } catch(err){
      }
  }
}
module.exports = deviceController;