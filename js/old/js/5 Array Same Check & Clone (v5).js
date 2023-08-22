// Array is Refrens Type but i Want 2 Array so
let a = ["Vrushank","Modi","Krupa"];
let b = [...a]; //[...(var_name)] this is spread opreter and new trick (and mostly devloper use this method)
a.push("Patel"); // this methoed 3 use sumtime your array is very big so this method use for devide 2 Array

console.log(a);
console.log(b);