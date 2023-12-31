// program where the user has to guess a number generated by a program

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    //NOTE: floor is remove . after values | Example: 5.2434234 =New this function return 5
    //NOTE: random is Gunrete New value like |Example: 0.132132123 , 0.213213213 , 0.12312312

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // take the input until the guess is correct
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    // check if the guess is correct
    if(number == random) { // While loop Condition is True After this if Loop Condition check
        console.log('You guessed the correct number.');
    }

  }

// call the function
guessNumber();

// __________________Devide Code for Understand 1___________________________________________

function guessNumber() {
    const random = Math.floor(Math.random() * 10) + 1;
    let number = parseInt(prompt(`${random}`));
    while(number !== random) {
        let number = parseInt(prompt(`${random}`));
    }
}
guessNumber();

// __________________Devide Code for Understand 2___________________________________________

var randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// __________________Devide Code for Understand___________________________________________
