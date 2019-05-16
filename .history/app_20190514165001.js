const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const jwt = require('jsonwebtoken')
const jwtKoa = require('koa-jwt')
const count = require('./middleware/count')
const index = require('./routes/index')
const users = require('./routes/users')
const secret = require('./config/secret')
const koaWebpack = require('koa-webpack');
const config = require('./build/webpack.config.js');
const history = require('./middleware/koa2-connect-history-api-fallback')
// error handler
onerror(app)
const middleware =  koaWebpack({ 
  config,
  dev: {
    publicPath: config.output.publicPath,
    // public path to bind the middleware to
    // use the same as in webpack
    // publicPath is required, whereas all other options are optional
    noInfo: false
  }
});

app.use(middleware);

//cors
app.use(cors())
// middlewares
app.use(count())
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(history({
  verbose: true//打出转发日志
  }));
app.use(require('koa-static')(__dirname + '/public'))
// app.use(jwtKoa({secret:secret.sign}).unless({
//   path:[
//     /^\/user\/register/,
//     /^\/user\/my\/login/,
//   ]
// }))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
