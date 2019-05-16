require('./www');
const WebSocket = require('ws');
const TrackController = require('../controller/track')

const ws = new WebSocket.Server({port: 3001});

ws.on('connection', ws => {
    console.log('server connection');
    ws.on('message', msg => {
        msg = JSON.parse(msg)
      let data = {
        position:[msg.longitude,msg.latitude],
        speed:msg.speed || 0,
        accuracy:msg.accuracy || 0
      }
      console.log(data);
      TrackController.create(data)
    });
});