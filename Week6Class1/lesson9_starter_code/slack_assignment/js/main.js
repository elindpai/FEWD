// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "addSunshine".
  // a. Inside the function, add the sunny class to the body
function addSunshine(){
  $('body').addClass('sunny');
};

// 2. Call the function
addSunshine();


// -------------------------------------------------------------------------------
// Part 2 - Predicting outcomes
// -------------------------------------------------------------------------------

// ---- A ------

// Look at the below function. Predict what will happen when the function is called.

function sayHello (name) {
  var greeting = "Hello " + name;

  $('.greeting').html(greeting);
}

sayHello("Ashlei");

// The function sayHello will return the variable greeting, namely Hello + the name defined by the function (eg Ashlei)

// ---- B ------

// Look at the below function. Predict what will happen when the function is called.

function hotOrNot (temp) {
  if (temp > 75) {
    $('.hot').fadeIn(350);
  } else {
    $('.not-hot').fadeIn(350);
  }
}

hotOrNot(76);

//if temp is greater than 75, the img hot will fade in. if temp is less than 75, img not-hot will fade in.

// ---- C ------

// Look at the below function. Predict what will happen when the function is called.
function compare (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    $('.greatest').html(num1);
  } else if (num2 > num1 && num2 > num3) {
    $('.greatest').html(num2);
  } else {
    $('.greatest').html(num3)
  }
}

compare(4, 11, 15);

//when you enter three numbers, if the first is greater than the second, and the first is greater than the third, then "greatest" will show the first number
//if the second number is greater than the first and greater than the third, "greatest" will show num2
//if num3 is greater than num1 and num2, then "greatest" will show num3


// -------------------------------------------------------------------------------
// Part 3 - Return values
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "square". It should take one parameter, number.
  function square(number){
    return number*number;
  };
  // a. Inside the function, return square * square.

// 2. Declare a variable mySquare.
      //Assign it the value returned by calling the
      //square function and passing in 5 as the parameter.
  var mySquare=square(5);

// 3. Display the value of mySquare in the element with the class .my-square

$(".my-square").html(mySquare);
