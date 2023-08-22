// Important Array Methods

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array

function rr(arr, ind) {
    console.log(`Index of this values ${ind}`); // index Of Values
    console.log(`${arr}*2 = ${arr*2}`); // array value multipcation
}

// for(let q = 0;q < a.length;q++){ // Using for loop multipay array all values
// 	rr(a[q],q); // q is represunt index of array
// }

a.forEach(rr); // same program run using foreach

//NOTE foreach loop in return 3 values
// 1 is array inside values
// 2 is array values index
// 3 is array all array