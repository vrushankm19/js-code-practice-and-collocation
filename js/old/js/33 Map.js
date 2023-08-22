// Map

//MAP alwys create new array
let mainData = [1, 2, 3]; // Array

let multi = function(innersq) {
        return innersq * 2; // Map alway return values NOT print
    }
    // NOTE: new array stored in g
let g = mainData.map(multi); // array in map function use and return as a peramiter
console.log(g);