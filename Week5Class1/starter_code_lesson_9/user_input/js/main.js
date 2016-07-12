
// When the user clicks on the #submit button
	$('#submit').on('click', function(){
	// Get the value from #numberToAdd and store it in a variable called userNumber
	var userNumber = $('#numberToAdd').val();
	// Convert userNumber to a float. Store the result back in the userNumber variable. hint: use parseFloat(userNumber)
	userNumber = parseFloat(userNumber);
	// Add 5 to userNumber. Store the result in the userNumber variable.
	userNumber += 5;
	// Print the result in the #result element. (hint: you can use the html() method)
	$('#result').html(userNumber);
});