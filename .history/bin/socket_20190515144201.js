const service = require('./www');
const io = require('socket.io')(service);
io.on('connection', socket => {
    console.log('socket初始化成功');
    setInterval(()=>{
        socket.emit('time',{time:new Date().toLocaleDateString()})
    },1000)
    
})