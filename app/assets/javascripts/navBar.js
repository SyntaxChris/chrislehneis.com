$(document).ready(function(){
	var $container = $('.main-cntnr');
	var $content = $('.content');
	var $navBar = $('svg.navbar');
	var containerOpen = false;

	var pageSlider = function(linkContent){
		if(containerOpen){
			if(linkContent.css('display') === 'block'){
				$content.hide();
				$container.addClass('collapse');
				$container.removeClass('expand');
				
				containerOpen = false;
			}else{
				$content.hide();
				$container.addClass('collapse');
				$container.removeClass('expand');
				setTimeout(function(){ 
					$container.removeClass('collapse');
					$container.addClass('expand');
					linkContent.delay(100).fadeIn();
					
				}, 320);
			}
		}else{
			if(linkContent.css('display') === 'block'){
				$container.removeClass('collapse');
				$container.addClass('expand');
			}else{
				$container.removeClass('collapse');
				$container.addClass('expand');
				
				$content.hide();
				linkContent.delay(100).fadeIn();
			}
			
			containerOpen = true;
		}
	};

	var $about = $('.about');
	var $portfolio = $('.portfolio');
	var $contact = $('.contact');
	
	$('.about-link').on('click', function(){
		pageSlider($about);
	});

	$('.portfolio-link').on('click', function(){
		pageSlider($portfolio);
	});

	$('.contact-link').on('click', function(){
		pageSlider($contact);
	});
});