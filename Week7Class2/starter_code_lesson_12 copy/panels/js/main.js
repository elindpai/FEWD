$('#content').ready(function(){
	$('#about, #contact').hide();
});

$('a[data-panel=home]').on('click', function(){
	$(this).closest('li').addClass('active');
	$('a').not(this).closest('li').removeClass('active');
	$('#home').show();
	$('#about, #contact').hide();
});

$('a[data-panel=about]').on('click', function(){
	$(this).closest('li').addClass('active');
	$('a').not(this).closest('li').removeClass('active');
	$('#about').show();
	$('#home, #contact').hide();
});

$('a[data-panel=contact]').on('click', function(){
	$(this).closest('li').addClass('active');
	$('a').not(this).closest('li').removeClass('active');
	$('#contact').show();
	$('#home, #about').hide();
});


