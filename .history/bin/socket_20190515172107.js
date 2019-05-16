const service = require('./www');
const io = require('socket.io')(service);
io.on('connection', socket => {
    console.log('socket初始化成功');
    setInterval(()=>{
        socket.emit('time',{time:new Date().toLocaleTimeString()})
    },1000)
    
})
io.on('pushPosition',(data) => {
    console.log(data)
})