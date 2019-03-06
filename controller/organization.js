const organizationModel = require('../models/organization');
const statusCode = require('../utils/response')
class OrganizationController {
//创建组织
static async create(ctx,next){
  let req = ctx.request.body;
  if(req.name && req.pId){
    try{
      //创建组织模型
      const ret = await organizationModel.createOrganzation(req);
      const data = await organizationModel.findOrganzationById(ret.id);
      ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('200','创建组织成功',data);
    } catch(err){
      ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('201','创建组织失败',err);
    }
  } else {
    ctx.response.status = 200;
    ctx.body = statusCode.SUCCESS('201','参数不全',null);
  }
}
//查询子组织
static async getChild(ctx,next){
  let req = ctx.request.body;
  if(req.id){
    try{
      const data = await organizationModel.findChildrenById(req.id);
      ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('200','查询组织成功',data);
    } catch(err){
      ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('201','查询组织失败',err);
    }
  } else {
    ctx.response.status = 200;
    ctx.body = statusCode.SUCCESS('201','参数不全',null);
  }
}
//更新组织
static async update(ctx,next){
  let req = ctx.request.body;
  if(req.id && req.name && req.pId){
    try{
      const  organzation= await organizationModel.findOrganzationById(req.id);
      delete req.id
      let updateData = Object.assign(organzation,req)
      // console.error(updateData)
      const data = await organizationModel.updateOrganzation(updateData);
      ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('200','更新组织成功',data);
    } catch(err){
      ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('201','更新组织失败',err);
    }
  } else {
    ctx.response.status = 200;
    ctx.body = statusCode.SUCCESS('201','参数不全',null);
  }
}
//删除组织
static async delete(ctx,next){
  let req = ctx.request.body;
  if(req.id){
    try{
      const  data= await organizationModel.findChildrenById(req.id);
      let idList = []
      data.forEach(element => {
        idList.push(element.id)
      });
      const  result= await organizationModel.deleteOrginzationById(idList);
      if(result === 0){
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('200','删除组织成功',err);
      }

    } catch(err){
      ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('201','删除组织失败',err);
    }
  } else {
    ctx.response.status = 200;
    ctx.body = statusCode.SUCCESS('201','参数不全',null);
  }
}
}
module.exports = OrganizationController;