// ________________________Easy___________________________
// program to remove duplicate value from an array

function getUnique(arr) {

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
getUnique(array);

// _______________________________hard_____________________________

// program to remove duplicate value from an array

function getUnique(arr) {

    let uniqueArr = [];

    // loop through array
    for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);