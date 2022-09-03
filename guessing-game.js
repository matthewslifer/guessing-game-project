//readline module
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

secretNumber = 23

//Checks if number is too big, too small, or is correct
let checkGuess = function(num) {
    if (num > secretNumber) {
        console.log("Too high.");
        return false
    };
    if (num < secretNumber) {
        console.log("Too small.");
        return false;
    }
    if (num === secretNumber) {
        console.log("Correct!");
        return true;
    }
}

//Asks user to enter in a guess
let askGuess = () => {
    rl.question("Enter a number: ", answer => {
    let num = Number(answer);
    if (checkGuess(num) === false) {
        return askGuess();
    }
    if (true) {
        console.log("You win! Game over.");
        rl.close();
    }
    });
}

askGuess();
