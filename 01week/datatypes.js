'use strict';

// // Write a JavaScript program to display the current day and time.
function dateAndTime() {
  return new Date().toLocaleString();
  // returns the date
}
dateAndTime();
// calls function dateandtime

// // // Write a JavaScript program to convert a number to a string.
function numberToString(num) {
  return String();
}
numberToString();
// // calls the number to string


// // Write a JavaScript program to convert a string to the number.
function stringToNumber(num) {
  return Number(num);
}
stringToNumber(5);

// // // Write a JavaScript program that takes in different datatypes and prints out whether they are a:
console.log (typeof 'blah blah string cheese');
console.log (typeof 20.5);
console.log (typeof NaN);
console.log (typeof false);
console.log (typeof function () {});


// // Write a JavaScript program that adds 2 numbers together.

function sumOfTwoNumbers (num1, num2) {
  return num1 + num2
}
sumOfTwoNumbers (3,2);
// // Write a JavaScript program that runs only when 2 things are true.
function bothArgumentsAreTrue(arg1,arg2) {
  if(arg1 && arg2){
    return 'both are true'
  }
}
bothArgumentsAreTrue(4,2000);

// // Write a JavaScript program that runs when 1 of 2 things are true.
function donutIsReady (donutHot, donutCold) {
  if (donutHot && donutIsReady) {
    return 'donut is ready to eat'
  }
}
// // Write a JavaScript program that runs when both things are not true.
function bothArgumentsAreFalse (Fals1, Fals2) {
  if (Fals1 && Fals2) {
    return 'both are false';
  }
}
bothArgumentsAreFalse (null,null);
 that runs when both things are not true.
