//MAP alwys create new array
let mainData = [1, 2, 3]; // Array

// NOTE: 1 values,2 index,3 All Array

let g = mainData.map(function(innersq, ind) { // v3 You can check index of this array values
    return `index ${ind},Values ${innersq * 2}`;
}); // array in map function use and return as a peramiter
console.log(g);