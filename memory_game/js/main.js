console.log("Up and running!");

/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
//save changes to main.js*/

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [ ];

const cardOne = cards[0];

cardsInPlay.push("cardOne");

console.log("User flipped " + cardOne);

const cardTwo = cards[2];

cardsInPlay.push("cardTwo");

console.log("User flipped " + cardTwo);


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You've found a match!");
}
else {
	alert("Sorry, try again.")
}