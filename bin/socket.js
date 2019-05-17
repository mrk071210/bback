require('./www');
const WebSocket = require('ws');
const TrackController = require('../controller/track')

const ws = new WebSocket.Server({port: 3001});

ws.on('connection', ws => {
    ws.on('message', msg => {
        msg = JSON.parse(msg)
        if(msg.longitude){
            let data = {
                position:[msg.longitude,msg.latitude],
                speed:msg.speed || 0,
                accuracy:msg.accuracy || 0,
                uuid:msg.uuid
              }
              console.log(data);
              TrackController.create(data)
        }
    });
});