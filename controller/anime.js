const animeModel = require('../models/anime');
const statusCode = require('../utils/response')
const util = require('util')
class animeController {
  //创建
  static async create(ctx,next){
    let req = ctx.request.body;
    // if(req.name && req.tag && req.realName){
      try{
        req.forEach(element => {
          element.image = JSON.stringify(element.image);
          element.tag = JSON.stringify(element.tag);
        });
        await animeModel.createAnime(req);
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
        const ret = await animeModel.findAllAnime();
        ret.forEach(item => {
          item.image = JSON.parse(item.image);
          item.tag = JSON.parse(item.tag);
        })
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','查找成功',ret);
      } catch(err){
        ctx.response.status = 412;
        ctx.body = statusCode.SUCCESS('201','查找失败',null);
      }
  }
  //根据tag查找
  static async findByTag(ctx,next){
    let req = ctx.request.body.tag;
      try{
        const ret = await animeModel.findByTag(req);
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','查找成功',ret);
      } catch(err){
        ctx.response.status = 412;
        ctx.body = statusCode.SUCCESS('201','查找失败',null);
      }
  }
}
module.exports = animeController;