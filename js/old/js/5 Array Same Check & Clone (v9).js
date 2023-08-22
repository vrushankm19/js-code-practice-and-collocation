// Array is Refrens Type but i Want 2 Array so
let a = ["Vrushank","Modi","Krupa"];
let c = ["My","Mi","Mey"];
let b = [...a, ...c]; // var a and c is merge
a.push("Patel"); 

console.log(a);
console.log(b);