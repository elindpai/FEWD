var zip = ['60657', '60601', '60046', '60643', '60010']
var schedule = ['#Chicago', '#Chicago-City', '#Suburb', '#Chicago-South', '#CookCounty']
var slot = ['Sunday, 4PM-6PM', 'Monday, 4PM-6PM', 'Tuesday, 4PM-6PM', 'Wednesday, 4PM-6PM', 'Thursday, 4PM-6PM']
var district
var date
var day
// ['60657'=Chicago, '60601'=Chicago-City, '60046'=Suburb, '60643'=Chciago-South, '60010'=Cook County]


function display(){
	if (district == -1){
		alert("Unfortunately, we don't deliver to your area right now. Check out our pick-up locations instead!")
	} else {
	$('.OnSubmit').css('display', 'none');
	$(schedule[district]).css('display', 'inherit');
	$('h3.Schedule').append(input);
}
	// if (district == 0){
	// 	schedule();
	// 	console.log('hello');
	// } else if (district == 1){
	// 	$('#Chicago-City').css('display', 'inherit');
	// 	$('h3.Schedule').append(input);
	// } else if (district == 2){
	// 	$('#Suburb').css('display', 'inherit');
	// 	$('h3.Schedule').append(input);
	// } else if (district == 3){
	// 	$('#Chicago-South').css('display', 'inherit');
	// 	$('h3.Schedule').append(input);
	// } else if (district == 4){
	// 	$('#CookCounty').css('display', 'inherit');
	// 	$('h3.Schedule').append(input);
	// } else {
	// 	alert("Unfortunately, we don't deliver to your area right now. Check out our pick-up locations instead!");
	// 
};

function nextDelivery(){
	$('#NextDelivery > li').append(slot[[day+1]]);
};



$('.InputField').submit(function (){
	event.preventDefault();
	input = $('#newEntry').val();

	district = zip.indexOf(input);
	console.log(district);
	display();

});

$('.InputField').submit(function (){
	date = new Date();
	day = date.getDay();
	nextDelivery();
	console.log(day);
	
});
