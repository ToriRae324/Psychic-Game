// Variables
var computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k", "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// Functions
function resetGuesses() {
    guessesLeft = 9;
    guesses = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};


// Main Program
document.onkeydown = function(event) {

    var letter = event.key.toLowerCase();
    
    guesses.push(letter);
    guessesLeft --;

    if (letter === computerGuess) {
        wins ++;
        resetGuesses();
        alert("You Win!");
    }

    if (guessesLeft === 0) {
        losses ++;
        resetGuesses();
        alert("Better luck next time.");
    }

    var html =
        "<h4>Guesses Left: " + guessesLeft + "</h4>" + "<br>" +
        "<h3>Guesses so far: " + "<br>" + guesses + "</h3>"+ "<hr>" +
        "<h4>Wins: " + wins + "</h4>" +
        "<h5>Losses: " + losses + "</h5>";

    

    document.querySelector("#game").innerHTML = html;
};