// Be sure to use descriptive names for variables!!


// when the user clicks on the fahrenheit to celsius button
	function multiplyFahrenheit(fahrenheit){
		var fahrenheit=(fahrenheit-32)/1.8;
		$('#result').html(fahrenheit);

	};


$('#fahrenheit_to_celsius').on('click', function(){
	var fahrenheit=$('#temperature').val();
	var fahrenheit=parseFloat(fahrenheit);
	multiplyFahrenheit(fahrenheit);

});
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user


// when the user clicks on the celsius to fahrenheit button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user
	function multiplyCelsius(celsius){
		var celsius = 1.8*celsius+32;
		$('#result').html(celsius);
	};

$('#celsius_to_fahrenheit').on('click', function(){
	var celsius = $('#temperature').val();
	var celsius = parseFloat(celsius);
	multiplyCelsius(celsius);
});