// Map

//MAP alwys create new array
let mainData = [1, 2, 3]; // Array

// NOTE: new array stored in g

let g = mainData.map(function(innersq) { // v2 using function expretion
    return innersq * 2;
}); // array in map function use and return as a peramiter
console.log(g);

// ___________________________________________

let gg = mainData.map(innersq => { // v3 Using Arrow Function
    return innersq * 2;
}); // array in map function use and return as a peramiter
console.log(gg);