var total;

function display(entries){
	$('#entries').append(entries);
	event.preventDefault();
};

function addition(total){
	$('#total').html(total);
};


	$('#entry').submit(function (){
		var entries = parseFloat($('#newEntry'). val());
		var entries = entries + '<br/>';
		display(entries);

		return entries;
});

$('#entry').submit(function (){
		var total =parseFloat($('#newEntry').val());
		var total = total.toFixed(2);
		var total = '$' + total;
		addition(total);
		return total;

});




		
		
		




// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
