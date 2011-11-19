// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function(){

  var socket = io.connect('http://localhost:3080/');

  // Send Id
  $('#sendButton').click(function(){
    socket.emit('set userid', { id: $('#userName').val() });    
  });

  // Get Id
  $('#myID').click(function(){
    socket.emit('get userid'); 
  });
  
  // Receive Message
  socket.on('message', function (data) {
    $('#data').append(data.message + '<br />');
  }); 

});