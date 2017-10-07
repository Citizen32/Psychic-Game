//This is an array of the alphabet and they will be our guess options.
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//These are the variables for our input(user) and output(computer).
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetter= [];

var random = compChoices [Math.floor(Math.random() * compChoices.lenght);
]