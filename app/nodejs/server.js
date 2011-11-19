var io = require('socket.io').listen(3080);

io.sockets.on('connection', function (socket) {

  // Set UserId
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
  
  // Receive Message
  socket.on('message', function (data) {
    console.log(data.message);
    socket.broadcast.emit('message', { message: data.message });
  });

});