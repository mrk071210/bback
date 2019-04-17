const tagModel = require('../models/tag');
const statusCode = require('../utils/response')
const util = require('util')
class tagController {
  //创建
  static async create(ctx,next){
    let req = ctx.request.body;
    // if(req.name && req.tag && req.realName){
      try{
        await tagModel.createTag(req);
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','创建成功',null);
      } catch(err){
        ctx.response.status = 412;
        ctx.body = statusCode.SUCCESS('201','创建失败',null);
      }
    // } else {
    //   ctx.response.status = 416;
    //   ctx.body = {
    //     code:201,
    //     message:'信息不全'
    //   };
    // }
  }
  //查找
  static async findAll(ctx,next){
    let req = ctx.request.body;
      try{
        let ret = await tagModel.findAllTag();
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','查找成功',ret);
      } catch(err){
        ctx.response.status = 412;
        ctx.body = statusCode.SUCCESS('201','查找失败',null);
      }
  }
}
module.exports = tagController;