const Router = require('koa-router')
const statusCode = require('../utils/response')
const UserController = require('../controller/user')
const OrganizationController = require('../controller/organization')
const AnimeController = require('../controller/anime')
const TagController = require('../controller/tag')
const ArticleController = require('../controller/article')
const DeviceController = require('../controller/device')
const router = new Router({
  // prefix:'/user'
})

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('200','创建组织成功');
})
// 登录
router.post('/user/my/login', UserController.login)
// 注册
router.post('/register', UserController.create)
// 获取用户信息
router.post('/user/my/info/get', UserController.getUserInfo)
//新增组织
router.post('/organization/create', OrganizationController.create)
//查询子组织
router.post('/organization/getChild', OrganizationController.getChild)
//更新组织
router.post('/organization/update', OrganizationController.update)
//删除组织
router.post('/organization/delete', OrganizationController.delete)

//新增anime
router.post('/anime/create', AnimeController.create)
//查询anime
router.post('/anime/findAll', AnimeController.findAll)
//根据tag查询anime
router.post('/anime/findByTag', AnimeController.findByTag)

//新增tag
router.post('/tag/create', TagController.create)
//查询tag
router.post('/tag/findAll', TagController.findAll)

//新增article
router.post('/article/create', ArticleController.create)
//查询article
router.get('/article/findAll', ArticleController.findAll)
//查询article详情
router.get('/article/getDetail', ArticleController.findById)
//更新article
router.post('/article/update', ArticleController.updateArticle)

//github授权登陆
router.post('/getUser', UserController.githubLogin)

//绑定设备
router.post('/device/bind', DeviceController.create)

//保存微信用户
// router.post('/user/saveWx', UserController.findAll)
module.exports = router