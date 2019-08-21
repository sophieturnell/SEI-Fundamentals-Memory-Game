console.log("Up and running!");

/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
//save changes to main.js*/

//const cards = ["queen", "queen", "king", "king"];

const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},

{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},

{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},

{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}

];


const cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	 	alert("You found a match!");
	} else {
	  	alert("Sorry, try again.");
	}
};	

var flipCard = function (cardId) {

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};


flipCard(0);
flipCard(2);
checkForMatch();


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

