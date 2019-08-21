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
const cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	 	console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
};	

var flipCard = function (cardId) {

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};


flipCard(0);
flipCard(2);
checkForMatch();

//function that will store all steps related to selecting, or flipping over, a card

//function to group together the logic to check to see if the two cards that the user has flipped over match each other



/*Previous code

const cardOne = cards[0];
	cardsInPlay.push("cardOne");
	console.log("User flipped " + cardOne);

	const cardTwo = cards[2];
	cardsInPlay.push("cardTwo");
	console.log("User flipped " + cardTwo);


	if (cardsInPlay.length === 2 && cardOne == cardTwo) {
		alert("You've found a match!");
	}
	else {
		alert("Sorry, try again.")
	}*/

