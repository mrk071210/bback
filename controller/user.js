const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');
const util = require('util')
const verify = util.promisify(jwt.verify);
const statusCode = require('../utils/response')
const config = require('../config/app.config.js')
const fetch  = require('node-fetch')
class userController {
  //创建用户
  static async create(ctx,next){
    let req = ctx.request.body;
    if(req.userName && req.password && req.realName){
      try{
        //创建用户模型
        const ret = await userModel.createUser(req);
        const data = await userModel.getUserInfo(ret.id);
        ctx.response.status = 200;
        ctx.body = {
          code:200,
          message:'注册成功',
          data
        };
      } catch(err){
        ctx.response.status = 412;
        ctx.body = {
          code:201,
          message:'注册失败',
          data:err
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code:201,
        message:'用户信息不全'
      };
    }
  }
  //用户登录
    static async login(ctx){
    const req = ctx.request.body;
    req.userName = req.userAccount
    req.password = req.userPassword
    if(req.userName && req.password){
      try{
        //查询用户信息
        const user = await userModel.findUserByName(req.userName);
        if(user){
            if(user.password === req.password){
              const userToken = {
                userName:user.userName,
                id:user.id
              }
              //签发token
              const token = jwt.sign(userToken,secret.sign,{expiresIn:'1h'})
              ctx.response.status = 200;
              ctx.body = {
                data:{
                  token:'Bearer '+token
                },
                head:{
                  success:'true',
                  code:'200',
                  msg:'登陆成功'
                }
              }
            }else{
              ctx.response.status = 200;
              ctx.body = {
                data:null,
                head:{
                  success:'false',
                  code:'201',
                  msg:'用户名或密码错误'
                }
              }
            }
        }else{
          ctx.response.status = 200;
          ctx.body = {
            data:null,
            head:{
              success:'false',
              code:'201',
              msg:'用户不存在'
            }
          }
        }
      }catch(err){
        ctx.response.status = 412;
        ctx.body = {
          data:null,
          head:{
            success:false,
            code:'201',
            msg:'用户名或密码错误'
          }
        }
      }
    }
  }
  //根据id获取用户信息
  static async detail(ctx){
    let id = ctx.params.id;
    if(id){
      try{
        //查询用户信息模型
        let data = await userModel.getUserInfo(id);
        ctx.response.status = 200;
        ctx.body = {
          code:200,
          message:'查询成功',
          data
        };
      }catch(err){
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          message:'查询失败',
          data:'参数不全'
        }
      }
    }
  }
  //根据token获取用户信息
  static async getUserInfo(ctx){
    const token = ctx.header.authorization
    if(token){
      let key
      try{
        key = await verify(token.split(' ')[1], secret.sign)
        const user = await userModel.getUserInfo(key.id)
        ctx.response.status = 200;
        ctx.body = {
          data:user,
          head:{
            success:true,
            code:'200',
            msg:'获取用户信息成功'
          }
        }
      }catch(err){
        ctx.response.status = 412;
        ctx.body = {
          data:null,
          head:{
            success:false,
            code:'201',
            msg:'用户权限错误'
          }
        }
      }
    }else{
      ctx.response.status = 412;
        ctx.body = {
          data:null,
          head:{
            success:false,
            code:'201',
            msg:'用户权限错误'
          }
        }
    }
  }
  static async saveWxUser(ctx){
    let req = ctx.request.body
    
  }
  //github用户登录
  static async githubLogin(ctx){
    let {code} = ctx.request.body
    if(!code){
      ctx.response.status = 400;
      ctx.body = statusCode.SUCCESS('201','code缺失');
      return
    }
    let path = config.GITHUB.access_token_url
    const params = {
      client_id: config.GITHUB.client_id,
      client_secret: config.GITHUB.client_secret,
      code: code
    }
    await fetch(path,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json', 
      },
      body:JSON.stringify(params)
    }).then( res => {
      return res.text()
    }).then(body => {
      const args = body.split('&')
      let arg = args[0].split('=')
      const access_token = arg[1]
      return access_token
    }).then(async token => {
      const url = config.GITHUB.user_url+'?access_token='+token
      await fetch(url).then(res2 =>
         {
           return res2.json()
         }).then(response => {
           if(response.id){
            //  ctx.response.session.userInfo = response
             ctx.response.status = 200;
             ctx.body = statusCode.SUCCESS('200','登录成功',response);
           }
         })
    })
  }
}
module.exports = userController;