// Array is Refrens Type but i Want 2 Array so
let a = ["Vrushank","Modi","Krupa"];
let b = a.slice(0).concat(["New","New2"]); // var a clone and add new values
a.push("Patel"); // this methoed 3 use sumtime your array is very big so this method use for devide 2 Array

console.log(a);
console.log(b);