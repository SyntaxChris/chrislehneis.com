$(document).ready(function(){
	var cntnr = $('.main-cntnr');

	$('.nav-link').on('click', function(){
		if(cntnr.hasClass('expand')){

			cntnr.addClass('collapse').removeClass('expand');
		}else{
			cntnr.addClass('expand');
		}
	});
});