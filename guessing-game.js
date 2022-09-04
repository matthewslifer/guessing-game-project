//readline module
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Asks user for a minimum and maximum value, passes those values into the randomInRange function, then calls on askGuess function to begin gameplay.
let askRange = () => {
    rl.question("Enter a minimim value: ", minimum => {
        let min = Number(minimum);

        rl.question("Enter a maximum value: ", maximum => {
            let max = Number(maximum);
            console.log("I am thinking of a number between " + min + " and " + max + "...");
            randomInRange(min, max);
            askGuess();
        })
    })
}

//Variable for number randomly selected
var secretNumber = ' ';

//Accepts a minimum and maximum value and then selects a random whole integer between those two values
let randomInRange = function(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    secretNumber = Number(Math.floor(Math.random() * (max - min) + min));
    return secretNumber;
}


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

//Begins game
askRange()
