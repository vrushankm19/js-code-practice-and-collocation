// js program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if (result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

// _______________________________My Version________________________

const a = prompt("Write Your 1 message...");
const b = prompt("Write Your 2 message...");


function m(num1, num2) { // Conditon Check and Return True And False
    const result = num1.toUpperCase() === num2.toUpperCase();
    return result;
}

const mainTotle = m(a, b); // Pass Peramiter in A and B Veriable

if (mainTotle) { // Function Return True and False values
    console.log("Your String is Same"); // True So this Run
} else {
    console.log("Your String is Not Same"); // False So this Run
}