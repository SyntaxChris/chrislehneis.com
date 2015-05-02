$(document).ready(function(){
	var container = $('.main-cntnr');
	var content = $('.cntnt');
	var containerOpen = false;

	$('.about-link').on('click', function(){
		if(containerOpen){
			if($('.about').css('display') === 'block'){
				content.hide();
				container.addClass('collapse');
				container.removeClass('expand');
				containerOpen = false;
			}else{
				content.hide();
				container.addClass('collapse');
				container.removeClass('expand');
				setTimeout(function(){ 
					container.removeClass('collapse');
					container.addClass('expand');
					$('.about').fadeIn();
				}, 320);
			}
		}else{
			if($('.about').css('display') === 'block'){
				container.removeClass('collapse');
				container.addClass('expand');
			}else{
				container.removeClass('collapse');
				container.addClass('expand');
				content.hide();
				$('.about').fadeIn();
			}
			containerOpen = true;
		}
	});

	$('.portfolio-link').on('click', function(){
		if(containerOpen){
			if($('.portfolio').css('display') === 'block'){
				content.hide();
				container.addClass('collapse');
				container.removeClass('expand');
				containerOpen = false;
			}else{
				content.hide();
				container.addClass('collapse');
				container.removeClass('expand');
				setTimeout(function(){ 
					container.removeClass('collapse');
					container.addClass('expand');
					$('.portfolio').fadeIn();
				}, 320);
			}
		}else{
			if($('.portfolio').css('display') === 'block'){
				container.removeClass('collapse');
				container.addClass('expand');
			}else{
				container.removeClass('collapse');
				container.addClass('expand');
				content.hide();
				$('.portfolio').fadeIn();
			}
			containerOpen = true;
		}
	});




	$('.contact-link').on('click', function(){
		if(containerOpen){
			if($('.contact').css('display') === 'block'){
				content.hide();
				container.addClass('collapse');
				container.removeClass('expand');
				containerOpen = false;
			}else{
				content.hide();
				container.addClass('collapse');
				container.removeClass('expand');
				setTimeout(function(){ 
					container.removeClass('collapse');
					container.addClass('expand');
					$('.contact').fadeIn();
				}, 320);
			}
		}else{
			if($('.contact').css('display') === 'block'){
				container.removeClass('collapse');
				container.addClass('expand');
			}else{
				container.removeClass('collapse');
				container.addClass('expand');
				content.hide();
				$('.contact').fadeIn();
			}
			containerOpen = true;
		}
	});
});