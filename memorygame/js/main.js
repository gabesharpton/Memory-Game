var cards = ["queen", "king", "queen", "king"]

var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped queen");
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("user flipped king");
cardsInPlay.length;
if (cardsInPlay[0] === cardsInPlay[1]){
	alert("you found a match")}
	else{
		alert("Try again")
}