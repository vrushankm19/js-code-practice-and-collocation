// program to trim a string

const string = '      Hello World       ';

const result = string.split(' ').join(''); // The split() method splits a string into an array of substrings. || method returns the new array. || method does not change the original string.
//The join() method returns an array as a string. || does not change the original array.
console.log(result);

// __________________________v2_____________________________

// program to trim a string using Function

function trimString(x) {

    const result = x.replace(/\s/g, ''); // The replace() method searches a string for a value or a regular expression.
    return result

}

const result = trimString('    Hello World    ');
console.log(result);