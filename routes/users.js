const Router = require('koa-router')
const UserController = require('../controller/user')
const OrganizationController = require('../controller/organization')
const router = new Router({
  prefix:'/user'
})

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
// 登录
router.post('/my/login', UserController.login)
// 注册
router.post('/register', UserController.create)
// 获取用户信息
router.post('/my/info/get', UserController.getUserInfo)
//新增组织
router.post('/organization/create', OrganizationController.create)
//查询子组织
router.post('/organization/getChild', OrganizationController.getChild)
//更新组织
router.post('/organization/update', OrganizationController.update)
//删除组织
router.post('/organization/delete', OrganizationController.delete)


module.exports = router