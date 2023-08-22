// Find Array in target values
function aa(arrayMy, target) {
    for (let r = 0; r <= arrayMy.length; r++) {
        if (arrayMy[r] === target) {
            return r; // true
        }
    }
    return -1; // False
}

let ww = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // array
let tt = aa(ww, 9); // array argument pass and target
console.log(tt); // return target values index