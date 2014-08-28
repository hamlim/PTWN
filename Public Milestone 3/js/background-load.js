$(document).ready(function() {
  var h = $(window).height();
  var w = $(window).width();
  if( h < 5000 && w < 5000){
    $('body').css('background-image', 'url(http://unsplash.it/' + w + '/' + h + '?random)');
		$('body').css('background-size', '100%');
		$('article').css('background-color', 'transparent');
  } else {
    $('body').css('background','#dddddd');
  };

});