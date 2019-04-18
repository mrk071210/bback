const db = require('../config/db')
const Sequelize = db.sequelize;
const Article = Sequelize.import('../schema/article'); 
// Article.sync({ force: false }); 

class ArticleModel {
  // 新增
  static async createArticle(data){
    return await Article.create(data);
  }
  // 查询所有
  static async findAllArticle(){
    return await Article.findAll({
      order:[['createdAt', 'DESC']],
      attributes: { exclude: ['content'] }
    });
  }
  // 根据ID查询
  static async findArticleById(id){
    return await Article.findOne({
        where:{id}
      });
  }
  // 更新
  static async updateArticleById(id,data){
    return await Article.update(
        data,
        {
        where:{id}
      });
  }
}
  
module.exports = ArticleModel;