$(document).ready(function() {
  var h = $(window).height();
  var w = $(window).width();
  if( height < 5000 && width < 5000){
    $('body').css('background-image', 'url(http://http://unsplash.it/' + w + '/' + h + ')');
  } else {
    $('body').css('background','#dddddd');
  };

});