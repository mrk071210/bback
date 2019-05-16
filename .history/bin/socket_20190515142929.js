const service = require('./www');
const io = require('socket.io')(service);
io.on('connection', socket => {
    console.log('初始化成功！下面可以用socket绑定事件和触发事件了');
    socket.on('report', data => {
         console.log('客户端发送的内容：', data);
    })

    setTimeout( () => {
        socket.emit('news', '我是初始化3s后的返回消息... ...') 
    }, 3000)
})