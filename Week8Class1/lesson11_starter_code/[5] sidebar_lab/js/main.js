$('.hamburger').on('click', function(e){
	e.preventDefault();
	$('.hamburger').toggleClass('active');
	$('.sidebar').toggleClass('off');
});

$('.close').on('click', function(e){
	e.preventDefault();
	$('.sidebar').toggleClass('off');
	$('.hamburger').toggleClass('active');
});