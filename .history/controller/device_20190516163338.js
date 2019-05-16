const deviceModel = require('../models/device');
const util = require('util')
const statusCode = require('../utils/response')

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
  //解绑
  static async cancel(ctx,next){
    let data = ctx.request.body
      try{
        let ret = await deviceModel.delDevice(data);
        if(ret){
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS('200','解绑成功');
        }else{
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS('201','解绑失败');
        }
      } catch(err){
      }
  }
}
module.exports = deviceController;