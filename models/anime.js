const db = require('../config/db')
const Sequelize = db.sequelize;
const Anime = Sequelize.import('../schema/anime'); 
// Anime.sync({ force: false }); 

class AnimeModel {
  // 新增
  static async createAnime(data){
    return await Anime.create(data);
  }
  // 查询所有
  static async findAllAnime(){
    return await Anime.findAll({
      attributes: { exclude: [''] }
    });
  }
  // 根据tag查询
  static async findByTag(tag){
    return await Sequelize.query("SELECT * FROM animes WHERE JSON_CONTAINS(JSON_UNQUOTE(JSON_EXTRACT(tag, '$')), '"+"\""+tag+"\""+"')")
  }
}
  
module.exports = AnimeModel;