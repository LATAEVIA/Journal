$(document).ready(function(){
  $('#journal-title').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    $('#journal-title').hide();
    $('#titleofEntry').prepend(title);
  });
});
