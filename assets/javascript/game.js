// Variables
var computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k", "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];



// Functions
function resetGuesses() {
    guessesLeft = 9;
    guesses = [];
};



// Main Program
document.onkeyup = function(event) {

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
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses so far: " + guesses + "</p>";

    document.querySelector("#game").innerHTML = html;
};