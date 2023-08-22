// 1.Write a program to print sum of all numbers in a array

/*

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let totle = a.reduce(function(x, y) {
    return x + y;
});
console.log(totle);

*/
// 2. To print odd numbers in an array (anonymous function )

/*

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let totle = a.filter(function(x) {
    return x % 2 == 0;
})

console.log(totle);

*/

// 3.Convert all strings to title Caps in a string array;
//     arr=["anand","mohan","babu"]

/* 

let arr = ["anand", "mohan", "babu"];
let title = arr.map(titleUc);

function titleUc(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
};

console.log(title);

*/


// 5.Return all the prime numbers in an array:
//   array = [1, 2, 13, 22, 81, 61, 71, 91];

/*

const array = [1, 2, 13, 22, 81, 61, 71, 91];

const isPrime = function(n) {
    if (n < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
};

const primeNumbers = array.filter(isPrime);

console.log(primeNumbers);

*/

// 6.Return all the palindromes in an array.

/*

function isPalindrome(el) {
    const str = String(el);
    let i = 0;
    let j = str.length - 1;
    // console.log(`this is j : ${j}`);
    // console.log(`this is i : ${i}`);
    while (i < j) {
        // console.log(`this is i : ${str[j]}`);
        if (str[i] === str[j]) {
            // console.log(`this is i : ${str[i]}`);
            // console.log(`this is j : ${str[j]}`);
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
// const arr = ['abcdefedcba'];

function findPalindrome(arr) {
    // console.log(arr);
    return arr.filter(function(el) {
        // console.log(`this is : ${el}`);
        return isPalindrome(el);
    });
}

console.log(findPalindrome(arr));

*/

// 7. Return median of two sorted arrays of the same size:
//      array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//      array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

/*

function findMedianSortedArrays(array1, array2) {
    const combinedArray = [...array1, ...array2].sort((a, b) => a - b);
    const length = combinedArray.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        const median1 = combinedArray[middleIndex - 1];
        const median2 = combinedArray[middleIndex];
        return (median1 + median2) / 2;
    } else {
        return combinedArray[middleIndex];
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const median = findMedianSortedArrays(array1, array2);
console.log(median);

*/

// 8. Remove duplicates from an array
//     arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

/*

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

let totleMain = [...new Set(arr)];

console.log(totleMain);

*/

// 9. Rotate an array by k time k=3 clockwise
//     Array = [1, 2, 3, 4, 5,,6,7,8];

/*

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 3;

const rotateArrayClockwise = (arr, k) => {
    const rotations = k % arr.length;
    for (let i = 0; i < rotations; i++) {
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    return arr;
};

const rotatedArray = rotateArrayClockwise(array, k);

console.log(rotatedArray);

*/

// 10. Given a string “Good Morning” . Convert it in array and print the array

/*

const string = "Good Morning";
const array = string.split(" ");

console.log(array);

*/

// 11. A person saves his monthly savings according to a given schema. He saves the same amount of money which is equal to the money saved in the immediate previous two months. Assume, initially he saved 1000 rupees and in the first month he saved another 1000. Your task is to tell how much he had totally saved at the end of ‘n’ months (n=10)

/*

function calculateTotalSavings(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1000;
    }

    let previousMonthSavings = 1000;
    let currentMonthSavings = 1000;
    let totalSavings = 2000;

    for (let i = 2; i < n; i++) {
        const nextMonthSavings = previousMonthSavings + currentMonthSavings;
        totalSavings += nextMonthSavings;

        previousMonthSavings = currentMonthSavings;
        currentMonthSavings = nextMonthSavings;
    }

    return totalSavings;
}

const n = 10;
const totalSavings = calculateTotalSavings(n);

console.log("Total savings at the end of", n, "months:", totalSavings, "rupees");

*/

// 12. We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list And print them in string format
// var friends1 = [“Mari”,“MaryJane”,“CaptianAmerica”,“Munnabai”,“Jeff”,“AAK chandran”]
// var friends2 = [“Gabbar”,“Rajinikanth”,“Mass”,“Spiderman”,“Jeff”,“ET”];

/*

var friends1 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];

var combinedFriends = friends1.concat(friends2);

combinedFriends.sort();

var sortedFriendsString = combinedFriends.join(", ");

console.log(sortedFriendsString);

*/

// 13.Above question without creating a new array.

// 14. Add your name to the end of the friends array, and add another name to beginning
// var friends = [“Mari”,“MaryJane”,“CaptianAmerica”,“Munnabai”,“Jeff”,“AAK chandran”]

/*

var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

friends.push("Vrushank");
friends.unshift("Mihir");

console.log(friends);

*/