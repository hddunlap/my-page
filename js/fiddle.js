
$(document).ready(function(){

	var $name = $('.col-2 h1');
	
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 100) {
	        // apply effects and animations
	        $name.show(1000);
	    }
	    if  ($(this).scrollTop() > 600) {       
			$('.wrapper').show(1000);
		}	
	});
});