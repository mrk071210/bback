const db = require('../config/db')
const Sequelize = db.sequelize;
const organization = Sequelize.import('../schema/organization'); 
// organization.sync({ force: false }); 

class OrganizationModel {
  // 创建组织
  static async createOrganzation(data){
    return await organization.create({
      name:data.name,
      shortName:data.shortName,
      desc:data.desc,
      pId:data.pId,
      dropFlag:data.dropFlag,
      open:data.open
    });
  }
  //查看组织详情
  static async findOrganzationById(id){
    return await organization.findOne({
      where:{id}
    });
  }
   //查看子组织
   static async findChildrenById(id){
    return await Sequelize.query('call show_childList(' + id + ')')
  }
  // 更新组织
  static async updateOrganzation(data){
    return await organization.update({
      name:data.name,
      shortName:data.shortName,
      desc:data.desc,
      pId:data.pId,
      dropFlag:data.dropFlag,
      open:data.open
    },{
      where: {
        id: data.id
      }
    });
  }
  // 删除组织
  static async deleteOrginzationById(idList){
    return await organization.destroy({
      where: {
            id:idList
      }
    });
  }
}
module.exports = OrganizationModel;