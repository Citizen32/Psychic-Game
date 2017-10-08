//Create an array with the alphabet
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Create variables 
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;



var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
  document.querySelector('#letters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};



//Call this function to reset everything
var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}


document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();



if (guessesLeft > 0){
  if (userGuess == letterToGuess){
    wins++;
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    alert("AWESOME! You could win the lottery with those powers.");
    //Reset game if user guessed the letter
    reset();
  }
}

else if(guessesLeft == 0){
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    alert("YOU LOSE! Try again.");
    //Reset game once user runs out of guesses. 
    reset();
  }
};



