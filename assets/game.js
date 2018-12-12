
//create array that lists out all the options 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Create variables to hold the number of wins, loses, number of guesses, your guesses so far
var wins = 0;
var losses = 0;
var guesses = 10;
var soFarGuesses = [];
var i = 0;


//Add the funtion to make the event work when you press the key
document.onkeyup = function(event) {
    //Determine players and their functions (user and computer)
    //User function when press the key
    var userGuess = event.key;
    // computer function Math.floor=round Math.random=pick random number or letter in this case from the length of the array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
    } else {
        guesses--;
        soFarGuesses[i]=userGuess;
        i++;
        
    }



    console.log("guess " + userGuess);
    console.log("cp " + computerGuess);
    console.log("wins " + wins);
    console.log("guesses " + guesses);
    console.log("so far guesses " + soFarGuesses);

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>The computer chose: " + computerGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>guesses: " + guesses + "</p>" +
    "<p>Guesses so far: " + soFarGuesses + "</p>";

    document.querySelector("#game").innerHTML = html;

    if (guesses === 0) {
        userGuess = 0;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guesses = 10;
        soFarGuesses.length = 0;
        i = 0;

    } 
}