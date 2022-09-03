secretNumber = 23

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
        console.log("Correct! Game over.");
        return true;
    }
}
