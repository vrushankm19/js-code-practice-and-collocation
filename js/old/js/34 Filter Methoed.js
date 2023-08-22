//Filter

// FILTER: is ceck condition and return only true array values 
// MAP: is check condition and and true and false both values is return

//NOTE: Filter and Map is both Create new Array

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const y = a.filter(i => { // this is call back function
    if (i % 2 === 0) {
        return i;
    }
});

console.log(y);