$(document).ready(function(){
  $('#get_color').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/color',
      type: 'POST'
    }).done(function(result){
      console.log(result);
      $('#color_me li:nth-child(' + result[0] + ')').css({'background-color': result[1]});
    });
  });
});