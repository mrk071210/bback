const ws = require('./www').ws;


ws.use(function (ctx, next) {
    return next(ctx)
})
ws.use(route.all('/', function (ctx) {
    ctx.websocket.on('message', function (message) {
        // 返回给前端的数据
        ctx.websocket.send(message)
    })
}))