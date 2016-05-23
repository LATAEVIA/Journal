$(document).ready(function(){
  $('#journal-body').submit(function(event){
    event.preventDefault();
    var body = $('#body').val();
    $('#journal-body').hide();
    $('#entryBodyText').prepend(body);
  });
});
