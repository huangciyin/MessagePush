$('<%= escape_javascript(render(:partial => @message))%>')
  .prependTo('#messages')
  .addClass('clientMessage')
  .hide()
  .fadeIn()

$('#new_message')[0].reset()