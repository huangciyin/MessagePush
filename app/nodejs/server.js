var io = require('socket.io').listen(3080);

io.sockets.on('connection', function (socket) {
  
  //socket.emit('message', { message: 'Connected!' });

  socket.on('set userid', function (data) {
    socket.set('userId', data.id, function () {
      socket.emit('message', { message: data.id + ' connected!' });
      socket.broadcast.emit('message', { message: data.id + ' connected!' });
    });
  });
  // Get UserId
  socket.on('get userid', function () {    
    socket.get('userId', function (err, data) {
      console.log(data);
      socket.emit('message', { message: data + ' is your id!' });
    });    
  });
  
  socket.on('message', function (data) {
    console.log(data.message);
    socket.broadcast.emit('message', { message: 'Hello back!' });
  });

});

/*
io.sockets.on('connection', function (socket) {
  io.sockets.emit('this', { will: 'be received by everyone'});

  io.sockets.emit('news', { hello: 'world' });

  socket.on('clientMSG', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', function () {
    sockets.emit('user disconnected');
  });
});
*/