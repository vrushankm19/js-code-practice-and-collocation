// sring in sama aphabet find
// *******************1****************
var str = "Vrunashank";
var charCount = {}; // Object to store character counts

// Iterate through each character in the string
for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

// Display repeated characters  
for (var char in charCount) {
    if (charCount[char] > 1) {
        console.log("Character '" + char + "' is repeated " + charCount[char] + " times.");
    }
}               

// *******************2****************

var str = "Vrunashank";
var repeatedChars = [];

for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    if (str.indexOf(char, i + 1) !== -1 && repeatedChars.indexOf(char) === -1) {
        repeatedChars.push(char);
    }
}

console.log("Repeated characters: " + repeatedChars.join(', '));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// How To find duplicate elements in array in javascript

let arrNuber = [1,2,3,4,5,6,7,8,9,3,5,7];
let dublicat = arrNuber.filter((ele,index,arr) => arr.indexOf(ele)!==index);
console.log(dublicat);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// How To find max/min in a given array in javascript

// *******************1****************
var numbers = [5, 2, 9, 1, 5, 6];

var max = Math.max(...numbers); // Maximum value
var min = Math.min(...numbers); // Minimum value

console.log("Maximum value:", max);
console.log("Minimum value:", min);


// *******************2****************

var numbers = [5, 2, 9, 1, 5, 6];

var max = numbers[0];
var min = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Maximum value:", max);
console.log("Minimum value:", min);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// what is difference between Filter and Find method
// *******************1****************

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers will be [2, 4]

// *******************2****************

const numbers = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
// firstEvenNumber will be 2

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// How to find the sum of all elements in array in Javascript
// *******************1****************

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum of all elements:", sum); // Output: 15

// *******************2**************** 

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of all elements:", sum); // Output: 15


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// reverse string
// *******************1**************** 

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
// *******************2**************** 

function reverseString(str) {
    return str.split("").reverse().join("");
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// sum

let main = [1,19,9];
let ans = main.reduce((ele,index) => {
     return index;
});
console.log(ans);
