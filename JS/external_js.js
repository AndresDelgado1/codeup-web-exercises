"use strict";

console.log("Hello from exrernal JavaScript");

alert("Welcome to my website!")

let favoriteColor = prompt("What is your favorite color?")

alert("Great, " + favoriteColor + " is my favorite color too!")

//exercise 3
let theLittleMermaid = parseInt(prompt("How many days did you rent The Little Mermaid for?"));
let brotherBear = parseInt(prompt("How many days did you rent Brother Bear for?"));
let hercules = parseInt(prompt("How many days did you rent Hercules for?"));
let rentalTotal = (theLittleMermaid * 3) + (brotherBear * 3) + ( hercules * 3)
alert("Your total is " + rentalTotal)

let googlePay = parseInt(prompt("What was your hourly pay at Google?"));
let googleHours = parseInt(prompt("How many hours did you work for Google?"));
let amazonPay = parseInt(prompt("What was your hourly pay at Amazon?"));
let amazonHours = parseInt(prompt("How many hours did you work for Amazon?"));
let facebookPay = parseInt(prompt("What was your hourly pay at FaceBook?"));
let facebookHours = parseInt(prompt("How many hours did you work for FaceBook?"));
let totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours)
alert("Your total pay was " + totalPay)

let classNotFull = confirm("Is class not full?");
let schedule = confirm("Does schedule work for you?");
let answer = classNotFull && schedule
alert("It is " + answer + " that you can be enrolled in this class");

let memberStatus = confirm("Are you a Premium member?");
let numberOfItems = parseInt(prompt("How many items are you buying?"));
let offer = confirm("Is offer not expired?");
let answer2 = offer && (numberOfItems > 2 || memberStatus);
alert("It is " + answer2 + " that you can apply this offer")






