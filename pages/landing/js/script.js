
$(".left div").hover(function() {
	$('.left div').removeClass().addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    $(this).removeClass();
	});
});

$(".right div").hover(function() {
	$('.right div').removeClass().addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    $(this).removeClass();
	});
});
