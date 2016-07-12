var images = ['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];
var order = images.length-6;

function forward(images){
	order += 1;
	$('img').attr('src', images[order]);
};

function moveForward(){
	if (order == 5){
		$('#next').on('click', function (){
			$('img').attr('src', images[0]);
		});
	} else {
		forward(images);
	}
};

function back(images){
	order -= 1;
	$('img').attr('src', images[order]);
};

function moveBack(){
	if (order == 0){
		$('#prev').on('click', function (){
			$('img').attr('src', images[5]);
		});
	}
};

$('#next').on('click', function(){
	forward(images);
	moveForward();
	});



$('#prev').on('click', function(){
	back(images);
	moveBack();
});





