require('./www');
const WebSocket = require('ws');
const TrackController = require('../controller/track')

const ws = new WebSocket.Server({port: 3001});

ws.on('connection', ws => {
    console.log('server connection');
    ws.on('message', msg => {
      let data = {
        position:[msg.longitude,msg.longitude],
        speed:msg.speed,
        accuracy:msg.accuracy
      }
      console.log(data);
      TrackController.create(data)
    });
});