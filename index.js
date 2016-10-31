"use strict"

var express = require('express'),
    app = express(),
    nodemon = require('nodemon'),
    winston = require('winston'),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static('src/www'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('data', function(msg){
    console.log('received: ' + msg);
    socket.broadcast.emit('data', msg);
  });
});

http.listen(process.env.port || 8080, function(){
    winston.info('Application server running!');
});
