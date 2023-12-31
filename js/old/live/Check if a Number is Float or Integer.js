// program to check if a number is a float or integer value

function checkNumber(x) {

    // check if the passed value is a number
    if (typeof x == 'number' && !isNaN(x)) { // In JavaScript NaN is short for "Not-a-Number". || The isNaN() method returns true if a value is NaN.

        // check if it is integer
        if (Number.isInteger(x)) { // The Number.isInteger() method determines whether the passed value is an integer.
            console.log(`${x} is integer.`);
        } else {
            console.log(`${x} is a float value.`);
        }

    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);


// _____________________________V2________________________________


// program to check if a number is a float or integer value

function checkNumber(x) {

    let regexPattern = /^-?[0-9]+$/;

    // check if the passed number is integer or float
    let result = regexPattern.test(x);

    if (result) {
        console.log(`${x} is an integer.`);
    } else {
        console.log(`${x} is a float value.`)
    }

}

checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);