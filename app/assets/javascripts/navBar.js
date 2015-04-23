$(document).ready(function(){
	$( '.nav-hover-area' ).mouseover(function(){
			$( '.navbar-bg, .nav-btn' ).removeClass( "hide" );
			$( '.navbar-bg, .nav-btn' ).addClass( "show" );
		}
	).mouseleave(function(){
		$( '.navbar-bg, .nav-btn' ).removeClass( "show" );
		$( '.navbar-bg, .nav-btn' ).addClass( "hide");
	});

});