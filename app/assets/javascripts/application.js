// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//
var socket = io.connect('http://localhost:3080/');

var sendMessage = function(_message) {
  if(!_message) return false;
  addMessageBox(_message);
  socket.emit('message', { message: _message });
};

//
var addMessageBox = function(_message) {
  if(!_message) return false;
  console.log("in here, _message")
  var box = $("#messageBoxTemplate").clone();
  box.attr("id", "");
  box.html(_message);
  $('#messages').prepend(box);
  box.fadeIn(800);
}

$(document).ready(function(){


  // Send Id
  $('#sendButton').click(function(){
    socket.emit('set userid', { id: $('#userName').val() });    
  });

  // Get Id
  $('#myID').click(function(){
    socket.emit('get userid'); 
  });

  // Save Message
  $('#sendMessage').click(function(){
    console.log('dada');
    sendMessage($('#message').val());
  });
  
  // Receive Message
  socket.on('message', function (data) {
    console.log(data.message);
    addMessageBox(data.message);
    //$('#messages').append(data.message + '<br />');
  });

}); 