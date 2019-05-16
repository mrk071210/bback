require('./www');
const WebSocket = require('ws');

const ws = new WebSocket.Server({port: 3001});

ws.on('connection', ws => {
    console.log('server connection');

    ws.on('message', msg => {
      console.log('server receive msg：', msg);
      
    });
});