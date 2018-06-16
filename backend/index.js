var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static('public'));

http.listen(port, function(){
    console.log('listening on *:' + port);
});

io.on('connection', function(socket){

    var room_name = 'default';
    socket.join(room_name);

    socket.on('room name', function(socket) {
        socket.leave(room_name);
        room_name = room;
        console.log('room name', room);
        socket.join(room);
        io.to(room).emit('room name', room);
    });

});