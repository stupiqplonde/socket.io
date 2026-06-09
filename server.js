const express = require('express');
const socketio = require('socket.io');

const app = express();
app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(8000, () => {console.log('http://localhost:8000')});

const io = socketio(expressServer);
let data = null

io.on('connection', (socket) => {
    console.log('server is run');
    socket.on('newMessageFromServer', (data) => {
        io.sockets.emit("newMessageFromClients", data);
    })
});