$('a[data-related-panel=women]').on('click', function(){
	$('#slide-down').toggle();
	$('#women').toggle();
});

$('a[data-related-panel=men]').on('click', function(){
	$('#slide-down').toggle();
	$('#men').toggle();
	// $('.nav-panel').not(this).toggle(false);
});