const articleModel = require('../models/article');
const statusCode = require('../utils/response')
const util = require('util')
class articleController {
  //创建
  static async create(ctx,next){
    let req = ctx.request.body;
    // if(req.name && req.tag && req.realName){
      try{
        await articleModel.createArticle(req);
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
        const ret = await articleModel.findAllArticle();
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
        const ret = await articleModel.findByTag(req);
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','查找成功',ret);
      } catch(err){
        ctx.response.status = 412;
        ctx.body = statusCode.SUCCESS('201','查找失败',null);
      }
  }
  //根据Id查找
  static async findById(ctx,next){
    let req = ctx.request.query.id;
      try{
        const ret = await articleModel.findArticleById(req);
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','查找成功',ret);
      } catch(err){
        ctx.response.status = 412;
        ctx.body = statusCode.SUCCESS('201','查找失败',null);
      }
  }
  //更新
  static async updateArticle(ctx,next){
    let id = ctx.request.body.id;
    let data = ctx.request.body;
    delete data.id
    delete data.updatedAt
    delete data.createAt
      try{
        const ret = await articleModel.updateArticleById(id,data);
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','更新成功',ret);
      } catch(err){
        ctx.response.status = 412;
        ctx.body = statusCode.SUCCESS('201','更新失败',null);
      }
  }
}
module.exports = articleController;