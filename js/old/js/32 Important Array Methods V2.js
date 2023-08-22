// Important Array Methods

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array

function rr(arr, ind) {
    console.log(`Index of this values ${ind}`); // index Of Values
    console.log(`${arr}*2 = ${arr*2}`); // array value multipcation
}

for (let q = 0; q < a.length; q++) { // Using for loop multipay array all values
    rr(a[q], q); // q is represunt index of array
}

// _____________________________OP____________________________

Index of this values 0
1*2 = 2
Index of this values 1
2*2 = 4
Index of this values 2
3*2 = 6
Index of this values 3
4*2 = 8
Index of this values 4
5*2 = 10
Index of this values 5
6*2 = 12
Index of this values 6
7*2 = 14
Index of this values 7
8*2 = 16
Index of this values 8
9*2 = 18