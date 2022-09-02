const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
    console.log("Hello " + answer);

    rl.question("Where are you from? ", (answer) => {
        console.log(answer + " is a great place!");

        rl.question("How are you doing? ", (answer) => {
            console.log("Very cool, " + answer);
            rl.close()
        });
    });
});

//Refactoring with function names
rl.question('What is your name? ', handleFirstQuestion);

const handleFirstQuestion = (answer) => {
    console.log("Hello " + answer);
    rl.question('Where are you from? ', handleSecondQuestion);
}

const handleSecondQuestion = (answer) => {
    console.log(answer + " is a great place!");
    rl.question('How are you doing?', handleThirdQuestion)
}

const handleThirdQuestion = (answer) => {
    console.log('very cool, ', + answer);
    rl.close();
}

//when user enters a number, it enters in a number as a string, will need to convert string number

//ex

rl.question("What is your favorite number? ", (num) => {
    console.log(Number(num)); //Number will convert string number into a number
    rl.close()
})
