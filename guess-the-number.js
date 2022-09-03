//readline module
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

secretNumber = 23

//Checks if number is too big, too small, or is correct
let checkGuess = function(num) {
    let guess = Number(num);
    if (guess > secretNumber) {
        console.log("Too high.");
        return askGuess();
    };
    if (guess < secretNumber) {
        console.log("Too small.");
        return askGuess();
    }
    if (guess === secretNumber) {
        console.log("Correct! Game over.");
        return rl.close()
    }
}

//Asks user to enter in a guess
let askGuess = () => {
    rl.question("Enter a guess: ", checkGuess);
}

askGuess();
